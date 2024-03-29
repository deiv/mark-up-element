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

import { LitElement, html, css } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { SharedStyles} from "./shared-styles";
import { MarkdownRenderer } from './renderer/markdown-renderer';

import { default as Chart } from './esm-bundle/chartjs-esm.js';


export class MarkUpElement extends LitElement {

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
            :host {
                display: block;
                overflow: auto;
                height: var(--mark-up-element-preview-height);
            }
            
            #content-viewer {
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

    set content(val) {
        let oldContent = this._content;

        this._content = html`${unsafeHTML(this.renderer.render(val))}`;
        this.requestUpdate('content', oldContent);
    }

    get content() {
        return this._content;
    }

    set htmlContent(val) {
        let oldContent = this._content;

        this._content = html`${unsafeHTML(val)}`;
        this.requestUpdate('content', oldContent);
    }

    constructor() {
        super();

        this.renderer = new MarkdownRenderer();
    }

    /*
     * XXX: TODO: ahora mismo estamos renderizando en cada cambio del contenido:
     *       - Dejar de hacerlo y actualizar el contenido dinamicamente ...
     *       - No renderizar continueamente al cambiar el contenido ...
     */
    render() {
        return html`
            <link href="../node_modules/chart.js/dist/Chart.css" rel="stylesheet" />
            <link href="../node_modules/highlight.js/styles/github.css" rel="stylesheet" />
            
            <div id="content-viewer" class="markdown-contents">
                ${this._content}
            </div>
        `;
    }

    firstUpdated() {
        this.configurePreviewObserver();
    }

    configurePreviewObserver() {

        const previewElement = this.shadowRoot.getElementById('content-viewer');
        const _this = this;
        const config = {
            attributes: false,
            subtree: false,
            childList: true
        };

        const callback = function(mutationsList, observer) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    _this.updateCharts();

                    /* something changed, stop looping */
                    break;
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(previewElement, config);
    }

    updateCharts() {
        const charts = this.shadowRoot.querySelectorAll('.chartjs');

        for(var chart of charts) {
            new Chart(
                chart.getContext('2d'),
                JSON.parse(chart.innerHTML)
            );
        }
    }
}

window.customElements.define('mark-up-element', MarkUpElement);
