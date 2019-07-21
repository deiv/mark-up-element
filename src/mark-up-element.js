/*
 * @file mark-up-element.js
 *
 * @brief Markdown viewer
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
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { MarkdownRenderer } from './markdown-renderer';

export class MarkUpElement extends LitElement {

    static get properties() {
        return {
            value: {
                type: String,
                reflect: false,
                value: ""
            }
        }
    }

    static get styles() {
        return [
            /*SharedStyles*/
        ];
    }

    set value(val) {
        let oldValue = this._value;

        this._value = html`${unsafeHTML(this.renderer.render(val))}`;

        this.requestUpdate('value', oldValue);
    }

    get value() {
        return this._value;
    }

    constructor() {
        super();

        this._value = "";
        this.renderer = new MarkdownRenderer();
    }

    render() {
        return html`
            <style>
                #content-viewer {
                    overflow: hidden;
                } 
            </style>
            
            <div id="content-viewer" class="markdown-contents">
                ${this._value}
            </div>
        `;
    }

    firstUpdated() {
        const viewerDiv = this.shadowRoot.getElementById('content-viewer');

    }

}

window.customElements.define('mark-up-element', MarkUpElement);
