/*
 * @file markdown-renderer.js
 *
 * @brief Markdown renderer
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

import 'markdown-it/dist/markdown-it.js';

import { default as mdTaskList } from './plugins/markdown-it-tasks-list.js';
import { default as mdAnchor } from 'markdown-it-anchor/index.js';
import { default as mdCharts } from 'markdown-it-chart/src/index.js';
import { default as mdToc } from 'markdown-it-toc-done-right/index.js';

import 'markdown-it-abbr/dist/markdown-it-abbr.js';
import 'markdown-it-center-text/dist/markdown-it-center-text.js';
import 'markdown-it-container/dist/markdown-it-container.js';
import 'markdown-it-footnote/dist/markdown-it-footnote.js';
import 'markdown-it-mark/dist/markdown-it-mark.js';
import 'markdown-it-sup/dist/markdown-it-sup.js';

/*
 * esm generated
 */
import { default as markdownItPlantuml } from '../esm-bundle/markdown-it-plantuml-bundle.js';
import { default as markdownItHighlightjs } from '../esm-bundle/markdown-it-highlightjs-bundle.js';

/*import mdRegex        from 'markdown-it-regexp/index.js';
import mdPdf          from 'markdown-it-pdf/index.js';
import mdVideo        from 'markdown-it-video/index.js';*/


export class MarkdownRenderer {

    constructor() {
        this.md = markdownit();

        this.md.use(mdTaskList);
        this.md.use(mdAnchor);
        this.md.use(mdCharts);
        this.md.use(mdToc);

        this.md.use(markdownitAbbr);
        this.md.use(markdownitCentertext);
        this.md.use(markdownitFootnote);
        this.md.use(markdownitMark);
        this.md.use(markdownitSup);

        const md2 = this.md;

        this.md.use(markdownitContainer, 'expander', {
            validate: function(params) {
                return params.trim().match(/^expander\s+(.*)$/);
            },

            render: function (tokens, idx) {
                var m = tokens[idx].info.trim().match(/^expander\s+(.*)$/);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return '<details><summary>' + md2.utils.escapeHtml(m[1]) + '</summary>\n';

                } else {
                    // closing tag
                    return '</details>\n';
                }
            }
        });

        this.md.use(markdownItHighlightjs);

        this.md.use( markdownItPlantuml, {
            imageFormat: 'svg'
        });
        this.md.use( markdownItPlantuml, {
            openMarker: '@startditaa',
            closeMarker: '@endditaa',
            diagramName: 'ditaa',
            imageFormat: 'png'
        });
        this.md.use( markdownItPlantuml, {
            openMarker: '@startgantt',
            closeMarker: '@endgantt',
            diagramName: 'gantt',
            imageFormat: 'svg'
        });
        this.md.use( markdownItPlantuml, {
            openMarker: '@startmindmap',
            closeMarker: '@endmindmap',
            diagramName: 'mindmap',
            imageFormat: 'svg'
        });

        /*this.md.use(mdRegex);
        this.md.use(mdImSize);
        this.md.use(mdPdf, {showUrl: false});
        this.md.use(mdVideo, {
            youtube: { width: 640, height: 390 },
            vimeo: { width: 500, height: 281 },
            vine: { width: 600, height: 600, embed: 'simple' },
            prezi: { width: 550, height: 400 }
        });*/
    }

    render(markdown) {
        return this.md.render(markdown);
    }
}
