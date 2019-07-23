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

.markdown-contents a {
    color: #0366d6;
    text-decoration: none;
}

.markdown-contents a:hover {
    text-decoration: underline;
}

.markdown-contents a {
    background-color: transparent;
}

.markdown-contents a:active,
.markdown-contents a:hover {
    outline-width: 0;
}

.markdown-contents h1,
.markdown-contents h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: .3em;
}


/* markdown-it-center-text */
.markdown-contents .text-align-center {
    text-align: center;
}


/* */


.markdown-contents *:not(table) {
    line-height: 160%;
    box-sizing: content-box;
}

.markdown-contents i,
.markdown-contents cite,
.markdown-contents em,
.markdown-contents var,
.markdown-contents address,
.markdown-contents dfn {
    font-style: italic;
}

.markdown-contents strong {
    font-weight: bold;
}

.markdown-contents p {
    margin: 10px 0;
    color: #555;
}

.markdown-contents > h1:first-of-type,
.markdown-contents > div > div:first-of-type h1 {
    margin-top: 14px;
}

.markdown-contents h1,
.markdown-contents h2,
.markdown-contents h3,
.markdown-contents h5 {
    font-weight: bold;
}

.markdown-contents h1 {
    font-size: 1.6rem;
    line-height: 28px;
    /*border-bottom: 3px double #999;*/
    margin: 52px 0 15px 0;
    padding-bottom: 7px;
    color: #000;
}

.markdown-contents h2 {
    font-size: 1.3rem;
    line-height: 23px;
    border-bottom: 1px solid #dbdbdb;
    margin: 30px 0 13px 0;
    padding-bottom: 7px;
    color: #333;
}

.markdown-contents h3,
.markdown-contents h4 {
    font-size: 1.2rem;
    line-height: 18px;
    margin: 20px 0 2px;
    color: #333;
}

.markdown-contents h5,
.markdown-contents h6 {
    font-size: 1rem;
    line-height: 17px;
    margin: 10px 0 -4px;
    color: #333;
}

.markdown-contents blockquote {
    margin: 15px 0;
}

.markdown-contents blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
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
    margin: 2px 0 8px;
    padding: 18px;
    background-color: #f5f7f8;
}

.markdown-contents code {
    color: #c1788b;
    padding: 4px 4px 2px 0;
    letter-spacing: -0.3px;
}

.markdown-contents pre code {
    padding: 0;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
}

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

/*.markdown-contents a {
    text-decoration: underline;
    color: #5286bc;
}

.markdown-contents a:hover {
    color: #007cff;
}*/

.markdown-contents {
    font-size: 13px; /* 1 rem */
    margin: 0;
    padding: 0;
}

.markdown-contents .task-list-item {
    border: 0;
    list-style: none;
    padding-left: 22px;
    margin-left: -22px;
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
`;
