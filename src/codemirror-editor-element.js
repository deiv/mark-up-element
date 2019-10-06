/*
 * @file mark-up-editor-element.js
 *
 * @brief Markdown editor
 * @author David Suárez
 * @date Sun, 21 Jul 19 20:24:34 +0200
 *
 * @license
 *
 * mark-up-element: markdown viewer and editor
 *
 * Copyright (C) 2019 <David Suárez <david.sephirot@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

import {LitElement, html, css} from 'lit-element';

import { default as CodeMirror } from 'codemirror/src/codemirror.js';
import {SharedStyles} from "./shared-styles";
//import 'codemirror/mode/markdown/markdown.js';


export class CodeMirrorEditorElement extends LitElement {

    static get properties() {
        return {
            content: {
                type: String,
                value: "",
                attribute: false,
                reflect: false
            }
        }
    }

    static get elementStyles() {
        return css`
            :host {
                display: block;
                overflow: auto;
                height: var(--mark-up-codemirror-element-height);
            }
            
            #editor-area, .CodeMirror {
                height: 100%;
            }
        `;
    }

    static get styles() {
        return [
            SharedStyles,
            this.elementStyles
        ];
    }

    constructor() {
        super();

        this.codemirror = null;
    }

    render() {
        return html`
            <link href="../node_modules/codemirror/lib/codemirror.css" rel="stylesheet" />
            <link href="../node_modules/codemirror/theme/idea.css" rel="stylesheet" />
            
            <textarea id="editor-area"></textarea>
        `;
    }

    firstUpdated() {
        const editorDiv = this.shadowRoot.getElementById('editor-area');

        const options = {
            mode: 'markdown',
            lineWrapping: true,
            // lineNumbers: true,
            theme: 'idea',
            extraKeys: {
                'Shift-Tab': 'indentLess',
                'Alt-Up': 'replaceLineTextToUpper',
                'Alt-Down': 'replaceLineTextToLower'
            },
            indentUnit: 4,
            cursorScrollMargin: 12,
            specialCharPlaceholder: () => document.createElement('span')
        };

        this.codemirror = CodeMirror.fromTextArea(editorDiv, options);

        this.contentChangeEvent = new CustomEvent('content-change', {
            detail: {
                content: this.content
            },
            bubbles: true,
            composed: true
        });

        const _this = this;

        this.codemirror.on('change', function (codemirror) {
            _this.contentChangeEvent.detail.content = codemirror.getValue();
            _this.dispatchEvent(_this.contentChangeEvent);
        });
    }
}

window.customElements.define('codemirror-editor-element', CodeMirrorEditorElement);
