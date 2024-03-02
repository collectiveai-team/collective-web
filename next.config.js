// module.exports = {
//     webpack: (config) => {
//         config.node = {
//             fs: 'empty',
//         };
//         return config;
//     },
// };

const path = require('path');

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next',
                        name: 'static/media/[name].[hash].[ext]',
                    },
                },
            ],
        });

        config.node = {
            fs: 'empty',
        };

        return config;
    },
};