const I18N_TEXT_SKIP_SELECTOR = '.description, .gitRefName, .gitRefHeadRemote, .authorCol.text, .gitFileName, .fileTreeRepo, .messageContent, .i18nSkip';
const I18N_ATTRIBUTES = ['title', 'placeholder', 'aria-label'];

const I18N_ZH_CN: { [text: string]: string } = {
	'Repo:': '仓库：',
	'Branches:': '分支：',
	'Show Remote Branches': '显示远程分支',
	'Find': '查找',
	'Match Case': '匹配大小写',
	'Use Regular Expression': '使用正则表达式',
	'Previous match (Shift+Enter)': '上一个匹配项 (Shift+Enter)',
	'Next match (Enter)': '下一个匹配项 (Enter)',
	'Open the Commit Details View for the current match': '为当前匹配项打开提交详情视图',
	'Close (Escape)': '关闭 (Escape)',
	'No Results': '无结果',
	'No results found.': '未找到结果。',
	'Graph': '图谱',
	'Description': '描述',
	'Date': '日期',
	'Author': '作者',
	'Commit': '提交',
	'Commit:': '提交：',
	'Parents:': '父提交：',
	'Author:': '作者：',
	'Author Date:': '作者日期：',
	'Committer:': '提交者：',
	'Committer Date:': '提交者日期：',
	'Date:': '日期：',
	'None': '无',
	'Load More Commits': '加载更多提交',
	'Show All': '显示全部',
	'Checked Out': '已签出',
	'Repository Settings': '仓库设置',
	'General': '常规',
	'Name:': '名称：',
	'Initial Branches:': '初始分支：',
	'Show Stashes': '显示贮藏',
	'Show Tags': '显示标签',
	'Include commits only mentioned by reflogs': '包含仅被引用日志提到的提交',
	'Only follow the first parent of commits': '仅跟随提交的第一个父提交',
	'User Details': '用户信息',
	'User Name:': '用户名：',
	'User Email:': '用户邮箱：',
	'User Name': '用户名',
	'User Email': '用户邮箱',
	'Edit': '编辑',
	'Remove': '移除',
	'Add User Details': '添加用户信息',
	'Remote Configuration': '远程配置',
	'Remote': '远程',
	'URL': 'URL',
	'to': '到',
	'Checked Out Branch': '已签出分支',
	'Specific Branches': '指定分支',
	'Configure Initial Branches': '配置初始分支',
	'File Tree View': '文件树视图',
	'File List View': '文件列表视图',
	'Type': '类型',
	'Action': '操作',
	'Fetch': '拉取',
	'Push': '推送',
	'Not Set': '未设置',
	'Local': '本地',
	'Global': '全局',
	'Issue Linking': '议题链接',
	'Issue Regex:': '议题正则：',
	'Issue URL:': '议题 URL：',
	'Add Issue Linking': '添加议题链接',
	'Pull Request Creation': '创建拉取请求',
	'Provider:': '提供方：',
	'Source Repo:': '源仓库：',
	'Destination Repo:': '目标仓库：',
	'Destination Branch:': '目标分支：',
	'Git Graph Configuration': 'Git Graph 配置',
	'Open Git Graph Extension Settings': '打开 Git Graph 插件设置',
	'Export Repository Configuration': '导出仓库配置',
	'Cancel': '取消',
	'Close': '关闭',
	'Dismiss': '关闭',
	'Retry': '重试',
	'Back': '返回',
	'Next': '下一步',
	'Save': '保存',
	'Save Name': '保存名称',
	'Save Configuration': '保存配置',
	'Go Back': '返回',
	'Proceed to Push': '继续推送',
	'View Issue': '查看议题',
	'View Details': '查看详情',
	'View Diff': '查看差异',
	'View File at this Revision': '查看此版本的文件',
	'View Diff with Working File': '与工作区文件比较差异',
	'Open File': '打开文件',
	'Open URL': '打开 URL',
	'Follow Internal Link': '访问内部链接',
	'Open Source Control View': '打开源代码管理视图',
	'Checkout': '签出',
	'Checkout Branch': '签出分支',
	'Create Archive': '创建归档',
	'Create Pull Request': '创建拉取请求',
	'Select in Branches Dropdown': '在分支下拉框中选中',
	'Unselect in Branches Dropdown': '在分支下拉框中取消选中',
	'Copy Branch Name to Clipboard': '复制分支名称到剪贴板',
	'Copy Commit Hash to Clipboard': '复制提交哈希到剪贴板',
	'Copy Commit Subject to Clipboard': '复制提交主题到剪贴板',
	'Copy Tag Name to Clipboard': '复制标签名称到剪贴板',
	'Copy Stash Name to Clipboard': '复制贮藏名称到剪贴板',
	'Copy Stash Hash to Clipboard': '复制贮藏哈希到剪贴板',
	'Copy Absolute File Path to Clipboard': '复制绝对文件路径到剪贴板',
	'Copy Relative File Path to Clipboard': '复制相对文件路径到剪贴板',
	'Copy URL to Clipboard': '复制 URL 到剪贴板',
	'Mark as Reviewed': '标记为已审查',
	'Mark as Not Reviewed': '标记为未审查',
	'Start Code Review': '开始代码审查',
	'End Code Review': '结束代码审查',
	'Force Delete': '强制删除',
	'Set Upstream': '设置上游分支',
	'Push Mode': '推送模式',
	'Normal': '普通',
	'Force With Lease': '带租约强制推送',
	'Force': '强制',
	'Push to Remote(s)': '推送到远程',
	'Push branch before creating the Pull Request': '创建拉取请求前先推送分支',
	'Always Accept': '始终接受',
	'Parent Hash': '父提交哈希',
	'Record Origin': '记录来源',
	'No Commit': '不提交',
	'Soft - Keep all changes, but reset head': '软重置 - 保留所有更改，仅重置 HEAD',
	'Mixed - Keep working tree, but reset index': '混合重置 - 保留工作区，但重置索引',
	'Hard - Discard all changes': '硬重置 - 丢弃所有更改',
	'Create a new commit even if fast-forward is possible': '即使可以快进，也创建一个新提交',
	'Squash Commits': '压缩提交',
	'Reinstate Index': '恢复索引',
	'Message': '消息',
	'Optional': '可选',
	'Include Untracked': '包含未跟踪文件',
	'Clean untracked directories': '清理未跟踪目录',
	'Name': '名称',
	'Check out': '签出',
	'Annotated': '附注标签',
	'Lightweight': '轻量标签',
	'Push to remote': '推送到远程',
	'Don\'t push': '不推送',
	'Don\'t delete on any remote': '不从任何远程删除',
	'Add Tag': '添加标签',
	'Add Remote': '添加远程',
	'Fetch URL': '拉取 URL',
	'Push URL': '推送 URL',
	'Fetch Immediately': '立即拉取',
	'Prune': '清理',
	'Prune Tags': '清理标签',
	'Use Globally': '全局使用',
	'Provider': '提供方',
	'Source Remote': '源远程',
	'Destination Remote': '目标远程',
	'Not a remote': '非远程仓库',
	'Host Root URL': '主机根 URL',
	'Source Owner': '源所有者',
	'Source Repo': '源仓库',
	'Destination Owner': '目标所有者',
	'Destination Repo': '目标仓库',
	'Destination Project ID': '目标项目 ID',
	'Destination Branch': '目标分支',
	'Commit Timestamp Order': '提交时间戳顺序',
	'Author Timestamp Order': '作者时间戳顺序',
	'Topological Order': '拓扑顺序',
	'Added': '已添加',
	'Modified': '已修改',
	'Deleted': '已删除',
	'Renamed': '已重命名',
	'Untracked': '未跟踪',
	'Valid Signature': '有效签名',
	'Good Signature with Unknown Validity': '有效性未知的良好签名',
	'Good Signature that has Expired': '已过期的良好签名',
	'Good Signature made by an Expired Key': '由过期密钥生成的良好签名',
	'Good Signature made by a Revoked Key': '由已吊销密钥生成的良好签名',
	'Signature could not be checked': '无法检查签名',
	'Bad Signature': '错误签名',
	'Jan': '1月',
	'Feb': '2月',
	'Mar': '3月',
	'Apr': '4月',
	'May': '5月',
	'Jun': '6月',
	'Jul': '7月',
	'Aug': '8月',
	'Sep': '9月',
	'Oct': '10月',
	'Nov': '11月',
	'Dec': '12月'
};

const I18N_ZH_CN_REPLACEMENTS: ReadonlyArray<[string, string]> = [
	['Configure "Pull Request Creation" Integration (Step\u00a01/2)', '配置“创建拉取请求”集成（第 1/2 步）'],
	['Configure "Pull Request Creation" Integration (Step\u00a02/2)', '配置“创建拉取请求”集成（第 2/2 步）'],
	['Configure "Pull Request Creation" Integration', '配置“创建拉取请求”集成'],
	['Pull Request Creation', '创建拉取请求'],
	['Unable to configure the "Pull Request Creation" Integration', '无法配置“创建拉取请求”集成'],
	['Unable to Add Remote', '无法添加远程'],
	['Unable to Add Tag', '无法添加标签'],
	['Unable to Apply Stash', '无法应用贮藏'],
	['Unable to Create Branch from Stash', '无法从贮藏创建分支'],
	['Unable to Checkout Branch & Pull Changes', '无法签出分支并拉取更改'],
	['Unable to Checkout Branch', '无法签出分支'],
	['Unable to Checkout Commit', '无法签出提交'],
	['Unable to Cherry Pick Commit', '无法拣选提交'],
	['Unable to Clean Untracked Files', '无法清理未跟踪文件'],
	['Unable to load Commit Details', '无法加载提交详情'],
	['Unable to load Commit Comparison', '无法加载提交比较'],
	['Unable to Create Branch', '无法创建分支'],
	['Unable to Delete Remote Branch', '无法删除远程分支'],
	['Unable to Delete Remote', '无法删除远程'],
	['Unable to Delete Tag', '无法删除标签'],
	['Unable to Drop Commit', '无法丢弃提交'],
	['Unable to Drop Stash', '无法丢弃贮藏'],
	['Unable to Save Changes to Remote', '无法保存远程更改'],
	['Unable to Export Repository Configuration', '无法导出仓库配置'],
	['Unable to Fetch from Remote(s)', '无法从远程拉取'],
	['Unable to Fetch into Local Branch', '无法拉取到本地分支'],
	['Unable to Merge Remote-tracking Branch', '无法合并远程跟踪分支'],
	['Unable to Merge Branch', '无法合并分支'],
	['Unable to Merge Commit', '无法合并提交'],
	['Unable to Pop Stash', '无法弹出贮藏'],
	['Unable to Prune Remote', '无法清理远程'],
	['Unable to Pull Branch', '无法拉取分支'],
	['Unable to Push Branch', '无法推送分支'],
	['Unable to Stash Uncommitted Changes', '无法贮藏未提交更改'],
	['Unable to Push Tag', '无法推送标签'],
	['Unable to Rename Branch', '无法重命名分支'],
	['Unable to Reset File to Revision', '无法将文件重置到指定版本'],
	['Unable to Reset to Commit', '无法重置到提交'],
	['Unable to Revert Commit', '无法还原提交'],
	['Unable to Start Code Review', '无法开始代码审查'],
	['Unable to retrieve Tag Details', '无法获取标签详情'],
	['Unable to update Code Review', '无法更新代码审查'],
	['Unable to View Diff', '无法查看差异'],
	['Click to View Diff', '点击查看差异'],
	['Click to View Repository', '点击查看仓库'],
	['Last File Viewed', '上次查看的文件'],
	['Checkout the existing branch & pull changes', '签出现有分支并拉取更改'],
	['Checkout the existing branch', '签出现有分支'],
	['Checkout Branch', '签出分支'],
	['Checkout', '签出'],
	['Rename Branch', '重命名分支'],
	['Delete Remote Branch', '删除远程分支'],
	['Delete Branch', '删除分支'],
	['Merge into current branch', '合并到当前分支'],
	['Rebase current branch on this Commit', '将当前分支变基到此提交'],
	['Rebase current branch on Branch', '将当前分支变基到分支'],
	['Reset current branch to this Commit', '将当前分支重置到此提交'],
	['Push Branch', '推送分支'],
	['Create Pull Request', '创建拉取请求'],
	['Create Archive', '创建归档'],
	['Create Branch from Stash', '从贮藏创建分支'],
	['Create Branch', '创建分支'],
	['Cherry Pick', '拣选'],
	['Revert', '还原'],
	['Drop Stash', '丢弃贮藏'],
	['Drop', '丢弃'],
	['Fetch into local branch', '拉取到本地分支'],
	['Pull into current branch', '拉取到当前分支'],
	['Apply Stash', '应用贮藏'],
	['Pop Stash', '弹出贮藏'],
	['Delete Tag', '删除标签'],
	['Push Tag', '推送标签'],
	['Stash uncommitted changes', '贮藏未提交更改'],
	['Reset uncommitted changes', '重置未提交更改'],
	['Clean untracked files', '清理未跟踪文件'],
	['Reset File to this Revision', '将文件重置到此版本'],
	['Opening Terminal', '正在打开终端'],
	['Renaming Branch', '正在重命名分支'],
	['Deleting Remote Branch', '正在删除远程分支'],
	['Deleting Branch', '正在删除分支'],
	['Creating Pull Request', '正在创建拉取请求'],
	['Creating Archive', '正在创建归档'],
	['Checking out Commit', '正在签出提交'],
	['Checking out Branch', '正在签出分支'],
	['Reverting Commit', '正在还原提交'],
	['Dropping Commit', '正在丢弃提交'],
	['Resetting to Commit', '正在重置到提交'],
	['Fetching Branch', '正在拉取分支'],
	['Pulling Branch', '正在拉取分支'],
	['Applying Stash', '正在应用贮藏'],
	['Creating Branch', '正在创建分支'],
	['Popping Stash', '正在弹出贮藏'],
	['Dropping Stash', '正在丢弃贮藏'],
	['Retrieving Tag Details', '正在获取标签详情'],
	['Stashing uncommitted changes', '正在贮藏未提交更改'],
	['Resetting uncommitted changes', '正在重置未提交更改'],
	['Cleaning untracked files', '正在清理未跟踪文件'],
	['Resetting file', '正在重置文件'],
	['Adding Remote', '正在添加远程'],
	['Saving Changes to Remote', '正在保存远程更改'],
	['Deleting Remote', '正在删除远程'],
	['Fetching from Remote(s)', '正在从远程拉取'],
	['Fetching from Remote', '正在从远程拉取'],
	['Pruning Remote', '正在清理远程'],
	['Exporting Repository Configuration', '正在导出仓库配置'],
	['Merging Remote-tracking Branch', '正在合并远程跟踪分支'],
	['Merging Branch', '正在合并分支'],
	['Merging Commit', '正在合并提交'],
	['Launching Interactive Rebase', '正在启动交互式变基'],
	['Rebasing on Remote-tracking Branch', '正在变基到远程跟踪分支'],
	['Rebasing on Branch', '正在变基到分支'],
	['Rebasing on Commit', '正在变基到提交'],
	['Yes, force delete branch', '是，强制删除分支'],
	['Yes, create Pull Request', '是，创建拉取请求'],
	['Yes, reset file', '是，重置文件'],
	['Yes, cherry pick', '是，拣选'],
	['Yes, delete', '是，删除'],
	['Yes, clear', '是，清除'],
	['Yes, remove', '是，移除'],
	['Yes, export', '是，导出'],
	['Yes, prune', '是，清理'],
	['Yes, push', '是，推送'],
	['Yes, checkout', '是，签出'],
	['Yes, revert', '是，还原'],
	['Yes, drop', '是，丢弃'],
	['Yes, create', '是，创建'],
	['Yes, clean', '是，清理'],
	['Add tag to commit', '向提交添加标签'],
	['Create branch at commit', '在提交处创建分支'],
	['Are you sure you want to', '确定要'],
	['the current branch', '当前分支'],
	['current branch', '当前分支'],
	['Remote-tracking Branch', '远程跟踪分支'],
	['this Repository', '此仓库'],
	['this repository', '此仓库'],
	['Code Review', '代码审查'],
	['Error:', '错误：'],
	['Loading Commit Details ...', '正在加载提交详情 ...'],
	['Loading Uncommitted Changes ...', '正在加载未提交更改 ...'],
	['Loading Commit Comparison ...', '正在加载提交比较 ...'],
	['Displaying all uncommitted changes.', '正在显示所有未提交更改。'],
	['Displaying all changes from', '正在显示从'],
	['Uncommitted Changes', '未提交更改'],
	['Commit Details', '提交详情'],
	['Commit Comparison', '提交比较'],
	['Loading ...', '正在加载 ...'],
	['Fetch URL:', '拉取 URL：'],
	['Push URL:', '推送 URL：'],
	['Signed by', '签名者'],
	['GPG Key Id:', 'GPG 密钥 ID：'],
	['addition', '新增'],
	['additions', '新增'],
	['deletion', '删除'],
	['deletions', '删除'],
	['Jan', '1月'],
	['Feb', '2月'],
	['Mar', '3月'],
	['Apr', '4月'],
	['May', '5月'],
	['Jun', '6月'],
	['Jul', '7月'],
	['Aug', '8月'],
	['Sep', '9月'],
	['Oct', '10月'],
	['Nov', '11月'],
	['Dec', '12月']
];

let i18nObserver: MutationObserver | null = null;

function initialiseLocalization() {
	if (!isChineseLanguage()) return;

	refreshLocalization(document.documentElement);
	if (i18nObserver === null && document.body) {
		i18nObserver = new MutationObserver((mutations) => {
			for (let i = 0; i < mutations.length; i++) {
				if (mutations[i].type === 'childList') {
					for (let j = 0; j < mutations[i].addedNodes.length; j++) {
						localizeNode(mutations[i].addedNodes[j]);
					}
				} else if (mutations[i].type === 'attributes') {
					localizeNode(mutations[i].target);
				}
			}
		});
		i18nObserver.observe(document.body, {
			attributes: true,
			attributeFilter: I18N_ATTRIBUTES,
			childList: true,
			subtree: true
		});
	}
}

function refreshLocalization(root: Node) {
	if (isChineseLanguage()) {
		localizeNode(root);
	}
}

function isChineseLanguage() {
	return initialState.config.language === 'zh-CN';
}

function localizeNode(node: Node) {
	if (node.nodeType === Node.TEXT_NODE) {
		localizeTextNode(node);
	} else if (node.nodeType === Node.ELEMENT_NODE) {
		localizeElement(<Element>node);
	}
}

function localizeElement(element: Element) {
	localizeElementAttributes(element);
	for (let i = 0; i < element.childNodes.length; i++) {
		localizeNode(element.childNodes[i]);
	}
}

function localizeElementAttributes(element: Element) {
	if (shouldSkipElement(element)) return;

	for (let i = 0; i < I18N_ATTRIBUTES.length; i++) {
		const attribute = I18N_ATTRIBUTES[i];
		const value = element.getAttribute(attribute);
		if (value !== null) {
			const translated = translateText(value);
			if (translated !== value) {
				element.setAttribute(attribute, translated);
			}
		}
	}
}

function localizeTextNode(node: Node) {
	if (shouldSkipTextNode(node) || node.textContent === null) return;

	const translated = translateTextPreservingWhitespace(node.textContent);
	if (translated !== node.textContent) {
		node.textContent = translated;
	}
}

function shouldSkipTextNode(node: Node) {
	return node.parentElement !== null && shouldSkipElement(node.parentElement);
}

function shouldSkipElement(element: Element) {
	return element.closest(I18N_TEXT_SKIP_SELECTOR) !== null;
}

function translateTextPreservingWhitespace(value: string) {
	const trimmed = value.trim();
	if (trimmed === '') return value;

	const translated = translateText(trimmed);
	return translated === trimmed ? value : value.replace(trimmed, translated);
}

function translateText(value: string) {
	const exact = I18N_ZH_CN[value];
	if (typeof exact === 'string') {
		return exact;
	}

	let translated = value;
	for (let i = 0; i < I18N_ZH_CN_REPLACEMENTS.length; i++) {
		translated = translated.split(I18N_ZH_CN_REPLACEMENTS[i][0]).join(I18N_ZH_CN_REPLACEMENTS[i][1]);
	}
	return translated;
}
