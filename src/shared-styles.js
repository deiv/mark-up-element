/*
 * @file shared-styles.js
 *
 * @brief Shared styles for all elements
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

import { css } from 'lit-element';

export const SharedStyles = css`
@charset "UTF-8";

@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  abbr[title]:after {
    content: " (" attr(title) ")";
  }

  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }

  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  img {
    max-width: 100% !important;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }
}


@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,300);

/*.markdown-contents *:not(table) {
    line-height: 160%;
    box-sizing: content-box;
}*/

/*
 * Tipografia
 */
 
.markdown-contents {
  font-size: 10px;
}

@media screen and (min-width: 32rem) and (max-width: 48rem) {
  .markdown-contents {
    font-size: 13px;
  }
}

@media screen and (min-width: 48rem) {
  .markdown-contents {
    font-size: 14px;
  }
}

.markdown-contents {
  line-height: 1.85;
  color: #444;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-weight: 300;
}


/*
 * Headers
 */

.markdown-contents h1,
.markdown-contents h2,
.markdown-contents h3,
.markdown-contents h5 {
    font-weight: bold;
}

.markdown-contents h1,
.markdown-contents h2,
.markdown-contents h3,
.markdown-contents h4 {
  margin: 0 0 .5em;
  line-height: 1.42;
}

.markdown-contents h1 {
  font-size: 3.392em; /*3.998em;*/
  border-bottom: 1px solid #bababa;
}

.markdown-contents h2 {
  font-size: 2.827em;
  border-bottom: 1px solid #dbdbdb;
}

.markdown-contents h3 {
  font-size: 1.999em;
  border-bottom: 1px solid #eaecef;
}

.markdown-contents h4 {
  font-size: 1.414em;
}

.markdown-contents h5 {
  font-size: 1.121em;
}

.markdown-contents h6 {
  font-size: .88em;
}


/*
 * Block
 */

/* https://github.com/mrmrs/fluidity */
img,
canvas,
iframe,
video,
svg,
select,
textarea {
  max-width: 100%;
}

.markdown-contents p {
  font-size: 1em;
  margin-bottom: 1.3rem;
  color: #777;
}

.markdown-contents blockquote {
  margin: 0;
  font-style: italic;
  padding: 1.33em;
  text-align: left;
  border-left: 4px solid #dddddd;
  color: #777777;
}

.markdown-contents blockquote > :first-child {
    margin-top: 0;
}

.markdown-contents  blockquote > :last-child {
    margin-bottom: 0;
}

.markdown-contents pre,
.markdown-contents code {
    font-family: Consolas, Courier, "Lucida Grande", "Malgun Gothic", "Segoe UI", dotum, sans-serif;
    border: 0;
    border-radius: 0;
}

.markdown-contents pre {
    padding: 1rem;
    text-align: left;
    background-color: #f5f7f8;
    border-left: 10px solid deeppink;
}

.markdown-contents code {
    letter-spacing: -0.3px;
}

.markdown-contents pre code {
    padding: 0;
    white-space: pre-wrap;
    background-color: transparent;
}

/* TODO; ??? */
.markdown-contents pre.addon {
    border: 1px solid #e8ebed;
    background-color: #fff;
}

.markdown-contents img {
    margin: 4px 0 10px;
    box-sizing: border-box;
    vertical-align: top;
    max-width: 100%;
}

.markdown-contents table {
    margin: 2px 0 14px;
    color: #555;
    width: auto;
    border-collapse: collapse;
    box-sizing: border-box;
}

.markdown-contents table th,
.markdown-contents table td {
    height: 32px;
    padding: 5px 14px 5px 12px;
}

.markdown-contents table td {
    border: 1px solid #eaeaea;
}

.markdown-contents table th {
    border: 1px solid #72777b;
    border-top: 0;
    background-color: #7b8184;
    font-weight: 300;
    color: #fff;
    padding-top: 6px;
}

.markdown-contents ul,
.markdown-contents menu,
.markdown-contents ol,
.markdown-contents dir {
    display: block;
    list-style-type: disc;
    padding-left: 17px;
    margin: 6px 0 10px;
    color: #555;
}

.markdown-contents ol {
    list-style-type: decimal;
}

.markdown-contents ul ul,
.markdown-contents ul ol,
.markdown-contents ol ol,
.markdown-contents ol ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

.markdown-contents ul li,
.markdown-contents ol li {
    position: relative;
}

.markdown-contents ul p, ol p {
    margin: 0;
}

.markdown-contents ul li.task-list-item:before,
.markdown-contents ol li.task-list-item:before,
.markdown-contents pre ul li:before {
    content: "";
}

.markdown-contents hr {
    border-top: 1px solid #eee;
    margin: 16px 0;
}

.markdown-contents .task-list-item {
    border: 0;
    list-style: none;
    padding-left: 22px;
    margin-left: -18px; /*-22px;*/
}

.markdown-contents .task-list-item:before {
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: center;
    content: "";
    height: 18px;
    width: 18px;
    position: absolute;
    left: 0;
    top: 1px;
    cursor: pointer;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAADdJREFUKBVjvHv37n8GMgALSI+SkhJJWu/du8fARJIOJMWjGpECA505GjjoIYLEB6dVUNojFQAA/1MJUFWet/4AAAAASUVORK5CYII=');
}

.markdown-contents .task-list-item.checked:before {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAMpJREFUKBVjjJ/64D8DGYCJDD1gLbTVyM3OxJDiJMzAxcYIdyALnIWDAdJU7i/OICfCxsDMxMgwc88bwk5F1vTs/W+GFUffwY2H+1FBlI2hLliCQYCbGSyJrqlzwwuGj9//YWoMtRBgUBJnZ6gMEGeQFWaFOw9kE7omkG5GWDyCPF7mJ86gIMbO8P//fwZGRkYGXJpAGuFO/fbrP0PXppcMD179JKgJRSOIA9N8/NZXrM4DqYEBjOgAaYYFOUwRNhruVGyS+MTI1ggAx8NTGcUtFVQAAAAASUVORK5CYII=');
}

.markdown-contents .task-list-item input[type='checkbox'],
.markdown-contents .task-list-item .task-list-item-checkbox {
    margin-left: -17px;
    margin-right: 3.8px;
    margin-top: 3px;
}

.markdown-contents-placeholder:before {
    content: attr(data-placeholder);
    color:grey;
    line-height: 160%;
    position: absolute;
}
 

/*
 * Inline
 */

.markdown-contents a,
.markdown-contents a:visited {
  color: #3498db;
  text-decoration: none;
}

.markdown-contents a:hover,
.markdown-contents a:focus,
.markdown-contents a:active {
  color: #2980b9;
}

.markdown-contents a:hover {
    text-decoration: underline;
}

.markdown-contents i,
.markdown-contents cite,
.markdown-contents em,
.markdown-contents var,
.markdown-contents address,
.markdown-contents dfn {
    font-style: italic;
}

.markdown-contents small {
  font-size: .707em;
}

.markdown-contents strong {
    font-weight: bold;
}


/*
 * Semantic classes
 */

/* for markdown-it-center-text */
.markdown-contents .text-align-center {
    text-align: center;
}

`;
