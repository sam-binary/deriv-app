const path                        = require('path');
const stylelintFormatter          = require('stylelint-formatter-pretty');
const { IS_RELEASE }              = require('./constants');
const { transformContentUrlBase } = require('./helpers');

const copyConfig = (base) => ([
    { from: path.resolve(__dirname, '../node_modules/smartcharts-beta/dist/*.smartcharts.*'), to: 'js/smartcharts/', flatten: true },
    { from: path.resolve(__dirname, '../node_modules/smartcharts-beta/dist/smartcharts.css*'), to: 'css/', flatten: true },
    { from: path.resolve(__dirname, '../node_modules/deriv-bot/dist/bot.css*'), to: 'css/', flatten: true },
    { from: path.resolve(__dirname, '../node_modules/deriv-bot/dist/media/**'), to: 'js/bot/media', flatten: true },
    { from: path.resolve(__dirname, '../node_modules/deriv-bot/dist/xml/**'), to: 'js/bot/xml', flatten: true },
    { from: path.resolve(__dirname, '../node_modules/deriv-bot/dist/*.*'), to: 'js/bot/', flatten: true },
    { from: path.resolve(__dirname, '../scripts/CNAME'), to: 'CNAME', toType: 'file' },
    { from: path.resolve(__dirname, '../src/root_files/404.html'), to: '404.html', toType: 'file' },
    { from: path.resolve(__dirname, '../src/root_files/robots.txt'), to: 'robots.txt', toType: 'file' },
    { from: path.resolve(__dirname, '../src/root_files/sitemap.xml'), to: 'sitemap.xml', toType: 'file' },
    { from: path.resolve(__dirname, '../src/public/images/favicons/favicon.ico'), to: 'favicon.ico', toType: 'file' },
    { from: path.resolve(__dirname, '../src/public/images/favicons/**') },
    { from: path.resolve(__dirname, '../src/public/images/common/logos/platform_logos/**') },
    // { from: path.resolve(__dirname, '../src/_common/lib/pushwooshSDK/**'), flatten: true },
    {
        from: path.resolve(__dirname, '../src/root_files/manifest.json'),
        to: 'manifest.json',
        toType: 'file',
        transform(content, path) {
            return transformContentUrlBase(content, path, base);
        }
    },
]);

const htmlOutputConfig = () => ({
    template: 'index.html',
    filename: 'index.html',
    minify: !IS_RELEASE ? false : {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
    }
});

const htmlInjectConfig = () => ({
    links: [
        'css/smartcharts.css',
        'css/bot.css',
        {
            path: 'manifest.json',
            attributes: {
                rel: 'manifest'
            }
        },
        {
            path: 'public/images/favicons',
            glob: '*',
            globPath: path.resolve(__dirname, '../src/public/images/favicons'),
            attributes: {
                rel: 'icon'
            }
        },
        // {
        //     path: 'pushwoosh-web-notifications.js',
        //     attributes: {
        //         rel: 'preload',
        //         as: 'script'
        //     }
        // },
    ],
    scripts: [
        // {
        //     path: 'pushwoosh-web-notifications.js',
        //     attributes: {
        //         defer: '',
        //         type: 'text/javascript'
        //     }
        // }
    ],
    append: true
});

const cssConfig = () => ({ filename: 'css/app.css', chunkFilename: 'css/[id].css' });

const swPrecacheConfig = (base) => ({
    cacheId: 'app',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'service-worker.js',
    minify: IS_RELEASE,
    navigateFallback: base,
    staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/, /CNAME$/],
    logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
            // This message occurs for every build and is a bit too noisy.
            return;
        }
        // eslint-disable-next-line no-console
        console.log(message);
    },
});

const stylelintConfig = () => ({
    configFile: path.resolve(__dirname, '../.stylelintrc.js'),
    formatter: stylelintFormatter,
    files: 'sass/**/*.s?(a|c)ss',
    failOnError: false, // Even though it's false, it will fail on error, and we need this to be false to display trace
});

module.exports = {
    copyConfig,
    htmlOutputConfig,
    htmlInjectConfig,
    cssConfig,
    swPrecacheConfig,
    stylelintConfig,
};
