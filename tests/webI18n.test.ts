import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import * as vm from 'vm';

interface I18nContext {
	initialState: { config: { language: string } };
	translateText?: (value: string) => string;
}

function loadI18n() {
	const source = fs.readFileSync(path.join(__dirname, '..', 'web', 'i18n.ts'), 'utf8');
	const script = ts.transpileModule(source, {
		compilerOptions: {
			module: ts.ModuleKind.None,
			target: ts.ScriptTarget.ES5
		}
	}).outputText;
	const context: I18nContext = {
		initialState: {
			config: {
				language: 'zh-CN'
			}
		}
	};
	vm.createContext(<vm.Context>context);
	vm.runInContext(script, <vm.Context>context);
	if (typeof context.translateText !== 'function') {
		throw new Error('translateText was not initialised.');
	}
	return context.translateText;
}

describe('Web i18n', () => {
	const translateText = loadI18n();

	it('Should translate Checkout actions as 签出', () => {
		expect(translateText('Checkout')).toBe('签出');
		expect(translateText('Checkout Branch')).toBe('签出分支');
		expect(translateText('Checkout the existing branch')).toBe('签出现有分支');
		expect(translateText('Checkout the existing branch & pull changes')).toBe('签出现有分支并拉取更改');
		expect(translateText('Unable to Checkout Commit')).toBe('无法签出提交');
	});

	it('Should translate commit details labels and messages', () => {
		expect(translateText('Commit:')).toBe('提交：');
		expect(translateText('Parents:')).toBe('父提交：');
		expect(translateText('Author:')).toBe('作者：');
		expect(translateText('Author Date:')).toBe('作者日期：');
		expect(translateText('Committer:')).toBe('提交者：');
		expect(translateText('Committer Date:')).toBe('提交者日期：');
		expect(translateText('None')).toBe('无');
		expect(translateText('Loading Commit Details ...')).toBe('正在加载提交详情 ...');
		expect(translateText('Displaying all uncommitted changes.')).toBe('正在显示所有未提交更改。');
		expect(translateText('to')).toBe('到');
	});
});
