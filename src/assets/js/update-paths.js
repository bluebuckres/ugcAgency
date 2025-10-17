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
            
            // Update CSS references
            content = content.replace(/href="styles\.css"/g, 'href="/assets/css/styles.css"');
            
            // Update JS references
            content = content.replace(/src="main\.js"/g, 'src="/assets/js/main.js"');
            content = content.replace(/src="auth-protection\.js"/g, 'src="/assets/js/auth-protection.js"');
            
            // Update image references
            content = content.replace(/src="ugc-photo-/g, 'src="/assets/images/ugc-photo-');
            content = content.replace(/src="makeugclogo-01\.jpg"/g, 'src="/assets/images/makeugclogo-01.jpg"');
            
            // Update page references
            content = content.replace(/href="index\.html"/g, 'href="/"');
            content = content.replace(/href="about\.html"/g, 'href="/pages/about.html"');
            content = content.replace(/href="contact\.html"/g, 'href="/pages/contact.html"');
            content = content.replace(/href="creators\.html"/g, 'href="/pages/creators.html"');
            content = content.replace(/href="services\.html"/g, 'href="/pages/services.html"');
            content = content.replace(/href="blog\.html"/g, 'href="/pages/blog/blog.html"');
            
            // Update tool page references
            content = content.replace(/href="content-cost-calculator\.html"/g, 'href="/pages/tools/content-cost-calculator.html"');
            content = content.replace(/href="creator-brief-template\.html"/g, 'href="/pages/tools/creator-brief-template.html"');
            content = content.replace(/href="roi-calculator\.html"/g, 'href="/pages/tools/roi-calculator.html"');
            content = content.replace(/href="service-quiz\.html"/g, 'href="/pages/tools/service-quiz.html"');
            content = content.replace(/href="ugc-strategy-guide\.html"/g, 'href="/pages/tools/ugc-strategy-guide.html"');
            
            // Update legal page references
            content = content.replace(/href="privacy-policy\.html"/g, 'href="/pages/legal/privacy-policy.html"');
            content = content.replace(/href="terms-conditions\.html"/g, 'href="/pages/legal/terms-conditions.html"');
            content = content.replace(/href="security\.html"/g, 'href="/pages/legal/security.html"');
            content = content.replace(/href="refund-policy\.html"/g, 'href="/pages/legal/refund-policy.html"');
            
            fs.writeFileSync(fullPath, content);
        }
    });
}

updatePaths(path.join(__dirname, '../..'));