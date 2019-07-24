
const tasksListPlugin = (md) => {

    const tags = {};
    const inlineRenderer = md.renderer.renderInline.bind(md.renderer);

    md.renderer.renderInline = function (tokens, options, env) {

        let result = inlineRenderer(tokens, options, env);

        if ((tags['bullet_list'] || 0) > 0 && (tags['list_item'] || 0) > 0) {
            if (tokens[0].content.startsWith('[ ] ')) {
                return '<input type="checkbox" disabled /> ' + result.substr(4);

            } else if (tokens[0].content.startsWith('[x] ')) {
                return '<input type="checkbox" disabled checked /> ' + result.substr(4);
            }
        }

        return result
    };

    const tokenRenderer = md.renderer.renderToken.bind(md.renderer);

    md.renderer.renderToken = function (tokens, idx, options) {
        let token = tokens[idx];
        let tag = token.type;

        if (tag.endsWith('_open')) {
            let _tag = tag.substr(0, tag.length - 5);
            tags[_tag] = (tags[_tag] || 0) + 1;

        } else if (tag.endsWith('_close')) {
            let _tag = tag.substr(0, tag.length - 6);
            tags[_tag] = (tags[_tag] || 0) - 1;
        }

        if ((tags['bullet_list'] || 0) > 0 && tag === 'list_item_open') {
            if (tokens[idx + 2].content.startsWith('[ ] ')) {
                token.attrPush(['class', 'task-list-item']);

            } else if  (tokens[idx + 2].content.startsWith('[x] ')) {
                token.attrPush(['class', 'task-list-item checked']);
            }
        }

        return tokenRenderer(tokens, idx, options);
    }
};

export default tasksListPlugin
