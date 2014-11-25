var browserSync = require('browser-sync'),
    path = require('path');

function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    browserSync.init({
        startPath: '/invitation.html',
        server: {
            baseDir: baseDir
        },
        browser: browser,
        port: 9732,
        logLevel: 'silent'
    });
}

browserSyncInit(path.join(__dirname, 'src'));