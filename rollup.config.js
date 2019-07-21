import resolve from 'rollup-plugin-node-resolve';

export default [{
        input: ['src/mark-up-element.js'],
        output: {
            file: 'bundle//mark-up-element.js',
            format: 'es',
            sourcemap: true
        },
        plugins: [
            resolve()
        ]
    },{
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
