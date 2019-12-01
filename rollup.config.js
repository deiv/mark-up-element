
import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default [{
        input: 'markdown-it/lib/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-esm.js',
            format: 'esm'
        },
        plugins: [
            json(),
            common(),
            resolve({preferBuiltins: false})
        ]//,
        //external: ['moment']
    }, {
        input: 'markdown-it-abbr/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-abbr-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-center-text/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-center-text-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-container/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-container-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-footnote/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-footnote-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-mark/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-mark-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-sup/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-sup-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-plantuml/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-plantuml-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-highlightjs/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-highlightjs-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    },{
        input: 'chart.js/dist/Chart.js',
        output: {
            file: 'src/esm-bundle/chartjs-esm.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]//,
        //external: ['moment']
    }, {
        input: ['src/mark-up-element.js'],
        output: {
            file: 'bundle/mark-up-element.js',
            format: 'umd',
            name: 'mark-up-element',
            sourcemap: true
        },
        plugins: [
            resolve()
        ]
    }, {
        input: ['src/mark-up-editor-element.js'],
        output: {
            file: 'bundle/mark-up-editor-element.js',
            format: 'umd',
            name: 'mark-up-editor-element',
            sourcemap: true
        },
        plugins: [
            resolve()
        ]
    }, {
        input: ['src/codemirror-editor-element.js'],
        output: {
            file: 'bundle/codemirror-editor-element.js',
            format: 'umd',
            name: 'codemirror-editor-element',
            sourcemap: true
        },
        plugins: [
            resolve()
        ]
    }
];
