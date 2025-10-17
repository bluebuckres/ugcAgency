const fs = require('fs');
const path = require('path');

function updatePaths(directory) {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            updatePaths(fullPath);
            return;
        }
        
        if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Add CSS reference if not present
            if (!content.includes('href="/assets/css/styles.css"')) {
                content = content.replace('</head>', '    <link rel="stylesheet" href="/assets/css/styles.css">\n</head>');
            }
            
            // Update paths based on directory depth
            content = content.replace(/src="([^"]*?)makeugclogo-01\.jpg"/g, 'src="/assets/images/makeugclogo-01.jpg"');
            content = content.replace(/src="([^"]*?)ugc-photo-/g, 'src="/assets/images/ugc-photo-');
            
            // Update navigation links
            content = content.replace(/href="([^"]*?)index\.html"/g, 'href="/"');
            content = content.replace(/href="([^"]*?)about\.html"/g, 'href="/pages/about.html"');
            content = content.replace(/href="([^"]*?)services\.html"/g, 'href="/pages/services.html"');
            content = content.replace(/href="([^"]*?)creators\.html"/g, 'href="/pages/creators.html"');
            content = content.replace(/href="([^"]*?)blog\.html"/g, 'href="/pages/blog/blog.html"');
            content = content.replace(/href="([^"]*?)resources\.html"/g, 'href="/pages/tools/ugc-strategy-guide.html"');
            
            // Update script references
            content = content.replace(/src="([^"]*?)main\.js"/g, 'src="/assets/js/main.js"');
            content = content.replace(/src="([^"]*?)auth-protection\.js"/g, 'src="/assets/js/auth-protection.js"');
            
            fs.writeFileSync(fullPath, content);
        }
    });
}

// Update all files in the project
updatePaths('/Users/supriyopaul/Downloads/UGC Agency Site 2');