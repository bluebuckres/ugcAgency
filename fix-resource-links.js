const fs = require('fs');
const path = require('path');

function updateLinks(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // Replace links to ugc-strategy-guide.html with resources.html
        content = content.replace(/href="[^"]*?ugc-strategy-guide\.html"/g, 'href="/resources.html"');
        content = content.replace(/href="\/pages\/tools\/ugc-strategy-guide\.html"/g, 'href="/resources.html"');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated links in: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.html')) {
            updateLinks(filePath);
        }
    });
}

// Start from current directory
walkDir('.');