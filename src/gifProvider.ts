'use strict';

import * as vscode from 'vscode';
const fs = require('fs');

export class GifDocumentContentProvider implements vscode.TextDocumentContentProvider {

    public provideTextDocumentContent(uri: vscode.Uri): string {
        let bitmap = fs.readFileSync(uri.fsPath);
        let gifBase64 = new Buffer(bitmap).toString('base64');

        let style = `<style type="text/css">
                    img {
                    display: block;
                    position: absolute;
                    top: 100px;
                    left: 100px;
                    }
                    </style>`;

        return `<!DOCTYPE html>
                <html>
                <head>${style}</head>
                <body><img src="data:image/gif;base64,${gifBase64}"></body>
                </html>`;
    }
}