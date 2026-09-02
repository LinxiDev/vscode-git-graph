import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import * as vm from 'vm';

interface I18nContext {
	initialState: { config: { language: string } };
	translateText?: (value: string) => string;
	translateHtml?: (value: string) => string;
}

function loadI18n(): { translateText: (value: string) => string; translateHtml: (value: string) => string } {
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
	if (typeof context.translateText !== 'function' || typeof context.translateHtml !== 'function') {
		throw new Error('i18n functions were not initialised.');
	}
	return { translateText: context.translateText, translateHtml: context.translateHtml };
}

describe('Web i18n', () => {
	const { translateText, translateHtml } = loadI18n();

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
		expect(translateText('Committer')).toBe('提交者');
		expect(translateText('Committer Date:')).toBe('提交者日期：');
		expect(translateText('None')).toBe('无');
		expect(translateText('Loading Commit Details ...')).toBe('正在加载提交详情 ...');
		expect(translateText('Displaying all uncommitted changes.')).toBe('正在显示所有未提交更改。');
		expect(translateText('to')).toBe('到');
	});

	it('Should translate dialog titles containing HTML markup', () => {
		expect(translateHtml('Are you sure you want to delete the branch <b><i>feature/x</i></b>?')).toBe('确定要删除分支 <b><i>feature/x</i></b>?');
		expect(translateHtml('Are you sure you want to reset the <b>uncommitted changes</b> to <b>HEAD</b>?')).toBe('确定要将未提交更改重置到 HEAD 吗？');
		expect(translateHtml('Add tag to commit <b><i>abc1234</i></b>:')).toBe('向提交添加标签 <b><i>abc1234</i></b>:');
		expect(translateHtml('Create branch at commit <b><i>abc1234</i></b>:')).toBe('在提交处创建分支：<b><i>abc1234</i></b>:');
	});

	it('Should translate long info and description text', () => {
		expect(translateHtml('Force the local branch to be reset to this remote branch.')).toBe('强制将本地分支重置为此远程分支。');
		expect(translateHtml('Only applicable to a non-interactive rebase.')).toBe('仅适用于非交互式变基。');
		expect(translateHtml('Include all untracked files in the stash, and then clean them from the working directory.')).toBe('将所有未跟踪文件包含在暂存中，然后从工作目录中清理它们。');
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
