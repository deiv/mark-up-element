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
import { LitElement, html } from 'lit-element';


export class MarkUpEditorElement extends LitElement {

    static get properties() {
        return {
            text: {
                type: String,
                value: ""
            }
        }
    }

    static get styles() {
        return [
            /*SharedStyles*/
        ];
    }

    constructor() {
        super();
    }

    render() {
        return html`

            <style>
                #container {
                    overflow: hidden;
                    clear: both;
                }
            </style>
            
            <div id="editorContainer">
            
            </div>
        `;
    }

    firstUpdated() {
        const editorDiv = this.shadowRoot.getElementById('editorContainer');

        this.initToolBar(this.editor);
    }

    initToolBar(editor) {

    }

}

window.customElements.define('mark-up-editor-element', MarkUpEditorElement);
