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
            
            // Fix paths in head section
            content = content.replace(/<head>/, `<head>
    <link rel="stylesheet" href="/assets/css/styles.css">
    <script src="/assets/js/main.js" defer></script>`);
            
            // Fix navigation
            const navHtml = `
    <nav class="main-nav">
        <div class="nav-container">
            <a href="/" class="logo" style="display: flex; align-items: center; gap: 0.75rem;">
                <img src="/assets/images/makeugclogo-01.jpg" alt="MakeUGC Logo" style="height: 50px; width: 50px; border-radius: 50%; object-fit: cover;">
                <span>MakeUGC</span>
            </a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/pages/services.html">Services</a></li>
                <li><a href="/pages/creators.html">Creators</a></li>
                <li><a href="/pages/blog/blog.html">Blog</a></li>
                <li><a href="/pages/about.html">About</a></li>
                <li><a href="/pages/tools/ugc-strategy-guide.html">Resources</a></li>
                <li><a href="/pages/contact.html" class="btn btn-primary">Contact</a></li>
            </ul>
            <button class="mobile-nav-toggle">☰</button>
        </div>
    </nav>`;
            
            // Replace navigation
            content = content.replace(/<nav[\s\S]*?<\/nav>/, navHtml);
            
            // Update all remaining paths
            content = content.replace(/href="([^"]*?)styles\.css"/g, 'href="/assets/css/styles.css"');
            content = content.replace(/src="([^"]*?)main\.js"/g, 'src="/assets/js/main.js"');
            content = content.replace(/src="([^"]*?)auth-protection\.js"/g, 'src="/assets/js/auth-protection.js"');
            content = content.replace(/src="([^"]*?)makeugclogo-01\.jpg"/g, 'src="/assets/images/makeugclogo-01.jpg"');
            content = content.replace(/src="([^"]*?)ugc-photo-/g, 'src="/assets/images/ugc-photo-');
            
            // Fix blog links in blog pages
            if (fullPath.includes('/blog/')) {
                content = content.replace(/href="blog-/g, 'href="/pages/blog/blog-');
            }
            
            fs.writeFileSync(fullPath, content);
        }
    });
}

updatePaths('/Users/supriyopaul/Downloads/UGC Agency Site 2');