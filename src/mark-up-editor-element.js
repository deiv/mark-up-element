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

import './codemirror-editor-element.js'
import './mark-up-element.js';
import {SharedStyles} from "./shared-styles";

export class MarkUpEditorElement extends LitElement {

    static get properties() {
        return {
            content: {
                type: String,
                reflect: false,
                attribute: false,
                value: ""
            }
        }
    }

    static get elementStyles() {
        return css`
            #editor-container {
                overflow: hidden;
            }
            
            codemirror-editor-element {
                width: 49%;
                float: left;
                --mark-up-codemirror-element-height: 100%;
            }
            
            mark-up-element {
                width: 49%;
                float: right;
                --mark-up-element-preview-height: 100%;
            }
        `;
    }

    static get styles() {
        return [
            this.elementStyles
        ];
    }

    constructor() {
        super();

        this.viewer = null;
    }

    render() {
        return html`
            <div id="editor-container">
                <codemirror-editor-element 
                    @content-change="${(e) => { this.handleEditorContentChange(e) }}">
                </codemirror-editor-element>
                <mark-up-element></mark-up-element>
            </div>
        `;
    }

    firstUpdated() {
        this.viewer = this.shadowRoot.querySelector('mark-up-element');

        this.initToolBar(this.editor);
    }

    initToolBar(editor) {

    }

    handleEditorContentChange(e) {
        this.viewer.content = e.detail.content;
    }
}

window.customElements.define('mark-up-editor-element', MarkUpEditorElement);
