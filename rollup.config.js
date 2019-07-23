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
    },{
        input: ['src/mark-up-element.js'],
        output: {
            file: 'bundle//mark-up-element.js',
            format: 'es',
            sourcemap: true
        },
        plugins: [
            resolve()
        ]
    }, {
        input: ['src/mark-up-editor-element.js'],
        output: {
            file: 'bundle/mark-up-editor-element.js',
            format: 'es',
            sourcemap: true
        },
        plugins: [
            resolve()
        ]
    }
];
