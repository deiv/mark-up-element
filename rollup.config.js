
import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';

export default [{
        input: 'chart.js/dist/Chart.js',
        output: {
            file: 'src/esm-bundle/chartjs-bundle.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]//,
        //external: ['moment']
    }, {
        input: 'markdown-it-plantuml/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-plantuml-bundle.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
    }, {
        input: 'markdown-it-highlightjs/index.js',
        output: {
            file: 'src/esm-bundle/markdown-it-highlightjs-bundle.js',
            format: 'esm'
        },
        plugins: [
            common(),
            resolve()
        ]
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
