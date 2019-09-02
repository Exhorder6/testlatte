import * as vscode from 'vscode';
import TreeBrowser from './TreeBrowser';

let testcafeBrowserTools = require ('testcafe-browser-tools');

export default class BrowserProvider implements vscode.TreeDataProvider<TreeBrowser> {
    private _onDidChangeTreeData: vscode.EventEmitter<TreeBrowser> = new vscode.EventEmitter<TreeBrowser>();
    readonly onDidChangeTreeData: vscode.Event<TreeBrowser> = this._onDidChangeTreeData.event;

    private treeBrowser: TreeBrowser[] = [];

    // super class methods

    public getChildren(browser?: TreeBrowser): TreeBrowser[] { 
        if(browser) {
            return [];
        }

        return this.treeBrowser;
    }

    public getTreeItem(browser: TreeBrowser): vscode.TreeItem {
        return browser;
    }

    // Class methods
    
    public async createBrowserList() {
        let browserList = await testcafeBrowserTools.getInstallations();
        if(browserList.length <= 0) {
            return;
        }

        for (const browser in browserList) {
            this.treeBrowser.push(new TreeBrowser(browser, vscode.TreeItemCollapsibleState.None));
        }

        // make the first browser the default selection
        if(this.treeBrowser.length > 0) {
            this.treeBrowser[0].toggleSelection();
        }
    }

    public refresh() {
        this._onDidChangeTreeData.fire();
    }

    public getBrowserList(): (string | undefined)[] {
        let browserList: (string | undefined)[] = [];
        this.treeBrowser.forEach(element => {
            if(element.selected) {
                browserList.push(element.label);  
            }                 
        });
        
        return browserList;
    }
}
