// Blog Data
const blogPosts = [
    {
        id: 1,
        title: "The 3-Part UGC Hook Formula That Stops the Scroll",
        excerpt: "Learn the exact framework our 120+ creators use to capture attention in the first 3 seconds and increase engagement by 340%.",
        category: "ugc-strategy",
        readTime: "5 min read",
        author: "Sarah Chen",
        date: "Dec 15, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/content-whale.com/b430fdf5915b453b9f5aeee609e2fd5ebaac281b.jpg",
        trending: true,
        views: 15420,
        engagement: 8.7
    },
    {
        id: 2,
        title: "How We Generated 5.2x ROAS with UGC for an E-commerce Brand",
        excerpt: "Discover the exact strategy we used to transform a struggling D2C brand into a conversion machine using authentic user-generated content.",
        category: "case-studies",
        readTime: "8 min read",
        author: "Marcus Rodriguez",
        date: "Oct 3, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/crowdriff.com/0aeb21d1769423ffb5cdf6bbf77d1d5e2a79e0bc.jpeg",
        trending: true,
        views: 28900,
        engagement: 12.3
    },
    {
        id: 3,
        title: "TikTok Algorithm Update: What Creators Need to Know (Q4 2024)",
        excerpt: "Major algorithm changes are shaking up the creator economy. Here's what changed and how to adapt your strategy now.",
        category: "platform-updates",
        readTime: "6 min read",
        author: "Jennifer Kim",
        date: "Dec 20, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/superscale.ai/8b15c1b7c2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b2.jpg",
        trending: false,
        views: 12300,
        engagement: 6.9
    },
    {
        id: 4,
        title: "Why GenZ Creators Outperform Influencers: The Data Speaks",
        excerpt: "New research shows why everyday creators are driving better results than traditional influencers. The numbers will surprise you.",
        category: "industry-news",
        readTime: "6 min read",
        author: "Alex Thompson",
        date: "Sep 20, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/miro.medium.com/214d8a146e2d7c7aeed952d4d2b81ce25c0d120d.jpeg",
        trending: true,
        views: 19800,
        engagement: 9.4
    },
    {
        id: 5,
        title: "From 0 to 1M Views: Our Creator's Journey",
        excerpt: "Follow Priya's journey from beginner creator to viral sensation and learn the strategies that worked.",
        category: "trends-tips",
        readTime: "10 min read",
        author: "Priya Patel",
        date: "Sep 15, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/assets.isu.pub/21cecf265544c8101336932c6369aff5f606193c.jpeg",
        trending: false,
        views: 8900,
        engagement: 7.2
    },
    {
        id: 6,
        title: "A/B Testing UGC: What Actually Works",
        excerpt: "We tested 500+ UGC videos to discover what drives conversions. The results will change how you think about creator content.",
        category: "analytics",
        readTime: "10 min read",
        author: "David Park",
        date: "Dec 8, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/blog.hootsuite.com/ugc-testing-framework.jpg",
        trending: false,
        views: 11200,
        engagement: 8.1
    },
    {
        id: 7,
        title: "Instagram Reels vs TikTok: Performance Comparison 2025",
        excerpt: "Which platform delivers better ROI for UGC campaigns? We analyzed the data from 200+ campaigns.",
        category: "platform-updates",
        readTime: "7 min read",
        author: "Lisa Wang",
        date: "Sep 5, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/www.showca.se/reels-vs-tiktok-analysis.jpg",
        trending: false,
        views: 15600,
        engagement: 7.8
    },
    {
        id: 8,
        title: "The 3-Second Rule: Why Your Hook Makes or Breaks Conversions",
        excerpt: "Discover why the first 3 seconds of your UGC content determine its success or failure.",
        category: "ugc-strategy",
        readTime: "9 min read",
        author: "Ryan Mitchell",
        date: "Aug 30, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/www.designity.com/3-second-rule-ugc.jpg",
        trending: true,
        views: 22100,
        engagement: 11.2
    },
    {
        id: 9,
        title: "The Creator Brief Template That Gets Results",
        excerpt: "Stop getting mediocre UGC. Use our proven brief template to get scroll-stopping content from any creator, every time.",
        category: "marketing-tactics",
        readTime: "8 min read",
        author: "Emma Foster",
        date: "Dec 12, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/blog.digiswarm.in/creator-brief-template.jpg",
        trending: false,
        views: 9800,
        engagement: 6.5
    },
    {
        id: 10,
        title: "How a Beauty Brand Increased Sales by 340% with UGC",
        excerpt: "The complete case study of a D2C beauty brand that transformed their marketing with authentic creator content.",
        category: "case-studies",
        readTime: "15 min read",
        author: "Sophie Laurent",
        date: "Aug 20, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/beauty-brand-ugc-case-study.jpg",
        trending: false,
        views: 18700,
        engagement: 10.1
    },
    {
        id: 11,
        title: "Building Authentic Creator Relationships at Scale",
        excerpt: "Learn how to build genuine partnerships with creators that drive long-term brand advocacy and consistent content.",
        category: "ugc-strategy",
        readTime: "12 min read",
        author: "Tom Anderson",
        date: "Nov 28, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/www.seobility.net/creator-relationships-scale.jpg",
        trending: false,
        views: 7600,
        engagement: 5.9
    },
    {
        id: 12,
        title: "The Ultimate UGC Content Calendar Strategy",
        excerpt: "Plan, organize, and execute your UGC campaigns with our comprehensive content calendar framework.",
        category: "ugc-strategy",
        readTime: "11 min read",
        author: "Maria Gonzalez",
        date: "Oct 15, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/www.ramirro.com/ugc-content-calendar.jpg",
        trending: false,
        views: 6400,
        engagement: 5.3
    },
    {
        id: 13,
        title: "YouTube Shorts: The Untapped UGC Goldmine",
        excerpt: "Why YouTube Shorts is becoming the most profitable platform for UGC campaigns and how to leverage it.",
        category: "platform-updates",
        readTime: "7 min read",
        author: "Chris Martinez",
        date: "Nov 10, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/nealschaffer.com/youtube-shorts-ugc.jpg",
        trending: false,
        views: 8300,
        engagement: 6.7
    },
    {
        id: 14,
        title: "Cross-Platform UGC Strategy: Maximizing Reach",
        excerpt: "How to adapt and distribute your UGC content across multiple platforms for maximum impact and ROI.",
        category: "marketing-tactics",
        readTime: "9 min read",
        author: "Nina Petrov",
        date: "Oct 22, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/socialtargeter.com/cross-platform-ugc.jpg",
        trending: false,
        views: 5900,
        engagement: 5.8
    },
    {
        id: 15,
        title: "Measuring UGC Success: The Complete Framework",
        excerpt: "Track the right metrics and prove ROI with our comprehensive UGC measurement framework used by top brands.",
        category: "analytics",
        readTime: "13 min read",
        author: "Robert Chang",
        date: "Sep 28, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/stackinfluence.com/ugc-measurement-framework.jpg",
        trending: false,
        views: 7200,
        engagement: 7.4
    },
    {
        id: 16,
        title: "Micro vs Macro Influencers: 2025 Performance Data",
        excerpt: "New data reveals why micro-influencers deliver 6.7x higher ROI than macro-influencers. The results are game-changing.",
        category: "case-studies",
        readTime: "8 min read",
        author: "Hannah Lee",
        date: "Jan 5, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/www.tanke.fr/micro-vs-macro-2025.jpg",
        trending: true,
        views: 26500,
        engagement: 13.7
    },
    {
        id: 17,
        title: "The Psychology Behind Viral UGC Content",
        excerpt: "Understanding the psychological triggers that make users engage with and share user-generated content.",
        category: "trends-tips",
        readTime: "10 min read",
        author: "Dr. Amanda Foster",
        date: "Dec 18, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/creatorlabz.com/viral-ugc-psychology.jpg",
        trending: false,
        views: 11400,
        engagement: 8.3
    },
    {
        id: 18,
        title: "LinkedIn Creator Economy: B2B UGC Opportunities",
        excerpt: "How B2B brands are leveraging LinkedIn's creator economy for authentic user-generated content campaigns.",
        category: "platform-updates",
        readTime: "6 min read",
        author: "Michael Torres",
        date: "Nov 5, 2024",
        image: "https://kimi-web-img.moonshot.cn/img/sproutsocial.com/linkedin-creator-economy.jpg",
        trending: false,
        views: 4800,
        engagement: 4.9
    },
    {
        id: 19,
        title: "UGC Performance Benchmarks: 2024 Industry Report",
        excerpt: "Comprehensive analysis of UGC performance across industries, platforms, and campaign types. Essential data for 2025 planning.",
        category: "analytics",
        readTime: "14 min read",
        author: "Rachel Green",
        date: "Jan 12, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/growthspurt.com/ugc-benchmarks-2024.jpg",
        trending: false,
        views: 13200,
        engagement: 9.1
    },
    {
        id: 20,
        title: "The Future of Creator Marketing: 2025 Predictions",
        excerpt: "Industry experts share their predictions for the creator economy and UGC marketing trends that will dominate 2025.",
        category: "trends-tips",
        readTime: "11 min read",
        author: "James Wilson",
        date: "Jan 20, 2025",
        image: "https://kimi-web-img.moonshot.cn/img/later.com/future-creator-marketing-2025.jpg",
        trending: false,
        views: 15800,
        engagement: 8.9
    }
];

// Search suggestions data
const searchSuggestions = [
    "UGC strategy", "TikTok algorithm", "creator economy", "influencer marketing",
    "ROAS optimization", "content creation", "social media trends", "engagement rates",
    "micro influencers", "case studies", "platform updates", "analytics",
    "Gen Z marketing", "video content", "brand advocacy"
];

// DOM Elements
let currentFilter = 'all';
let currentPage = 1;
const postsPerPage = 9;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTypewriter();
    initializeAnimations();
    initializeSearch();
    initializeCategoryFilters();
    renderBlogPosts();
    renderTrendingPosts();
    initializeCounters();
    initializeMiniChart();
    initializeScrollAnimations();
    initializeNewsletterForm();
});

// Typewriter effect for hero
function initializeTypewriter() {
    const typed = new Typed('.typed-text', {
        strings: [
            'UGC Insights',
            'Creator Strategies',
            'Growth Tactics',
            'Industry Analysis'
        ],
        typeSpeed: 80,
        backSpeed: 60,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate organic shapes
    anime({
        targets: '.organic-shape',
        translateY: [-20, 20],
        rotate: [0, 360],
        duration: 8000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('searchSuggestions');
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length > 0) {
            const filteredSuggestions = searchSuggestions.filter(suggestion => 
                suggestion.toLowerCase().includes(query)
            );
            
            displaySearchSuggestions(filteredSuggestions);
            filterBlogPosts(query);
        } else {
            hideSearchSuggestions();
            renderBlogPosts();
        }
    });
    
    searchInput.addEventListener('focus', function() {
        if (this.value.length > 0) {
            displaySearchSuggestions(searchSuggestions);
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            hideSearchSuggestions();
        }
    });
}

function displaySearchSuggestions(suggestions) {
    const container = document.getElementById('searchSuggestions');
    
    if (suggestions.length === 0) {
        hideSearchSuggestions();
        return;
    }
    
    container.innerHTML = suggestions.map(suggestion => `
        <div class="px-4 py-2 hover:bg-sage/10 cursor-pointer suggestion-item" 
             onclick="selectSuggestion('${suggestion}')">
            ${suggestion}
        </div>
    `).join('');
    
    container.classList.add('show');
}

function hideSearchSuggestions() {
    const container = document.getElementById('searchSuggestions');
    container.classList.remove('show');
}

function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = suggestion;
    hideSearchSuggestions();
    filterBlogPosts(suggestion.toLowerCase());
}

// Category filters
function initializeCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-tag');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.dataset.category;
            currentPage = 1;
            
            // Render filtered posts
            renderBlogPosts();
        });
    });
}

// Filter and render blog posts
function filterBlogPosts(searchQuery = '') {
    let filteredPosts = blogPosts;
    
    // Filter by category
    if (currentFilter !== 'all') {
        filteredPosts = filteredPosts.filter(post => post.category === currentFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
        filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchQuery) ||
            post.excerpt.toLowerCase().includes(searchQuery) ||
            post.author.toLowerCase().includes(searchQuery)
        );
    }
    
    return filteredPosts;
}

function renderBlogPosts() {
    const grid = document.getElementById('blogGrid');
    const filteredPosts = filterBlogPosts();
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(0, endIndex);
    
    grid.innerHTML = postsToShow.map(post => createBlogCard(post)).join('');
    
    // Update load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (endIndex >= filteredPosts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    // Initialize fade-in animations
    setTimeout(() => {
        const cards = grid.querySelectorAll('.blog-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
    }, 100);
}

function createBlogCard(post) {
    return `
        <div class="masonry-item">
            <article class="blog-card rounded-2xl overflow-hidden shadow-lg fade-in" data-post-id="${post.id}">
                <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-sage/20 to-soft-clay/30">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                </div>
                
                <div class="p-6">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-medium text-sage bg-sage/10 px-3 py-1 rounded-full">
                            ${formatCategory(post.category)}
                        </span>
                        <span class="text-xs text-charcoal/60">${post.readTime}</span>
                    </div>
                    
                    <h2 class="font-crimson text-xl font-bold text-charcoal mb-3 leading-tight hover:text-sage transition-colors cursor-pointer" onclick="openArticle(${post.id})">
                        ${post.title}
                    </h2>
                    
                    <p class="text-charcoal/70 text-sm leading-relaxed mb-4">
                        ${post.excerpt}
                    </p>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center">
                                <span class="text-xs font-bold text-sage">${post.author.charAt(0)}</span>
                            </div>
                            <div>
                                <div class="text-sm font-medium text-charcoal">${post.author}</div>
                                <div class="text-xs text-charcoal/60">${post.date}</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center space-x-4 text-xs text-charcoal/60">
                            <span>${post.views.toLocaleString()} views</span>
                            <span>${post.engagement}% engagement</span>
                        </div>
                    </div>
                    
                    <!-- Reading Progress -->
                    <div class="reading-progress mt-4">
                        <div class="reading-progress-bar" style="width: 0%"></div>
                    </div>
                </div>
            </article>
        </div>
    `;
}

function formatCategory(category) {
    const categoryMap = {
        'ugc-strategy': 'UGC Strategy',
        'case-studies': 'Case Studies',
        'platform-updates': 'Platform Updates',
        'industry-news': 'Industry News',
        'trends-tips': 'Trends & Tips',
        'marketing-tactics': 'Marketing Tactics',
        'analytics': 'Analytics'
    };
    return categoryMap[category] || category;
}

// Trending posts
function renderTrendingPosts() {
    const trendingContainer = document.getElementById('trendingPosts');
    const trendingPosts = blogPosts.filter(post => post.trending).slice(0, 5);
    
    trendingContainer.innerHTML = trendingPosts.map(post => `
        <div class="trending-item p-3 rounded-lg cursor-pointer" onclick="openArticle(${post.id})">
            <h4 class="font-medium text-sm text-charcoal mb-1 leading-tight hover:text-sage transition-colors">
                ${post.title}
            </h4>
            <div class="flex items-center justify-between text-xs text-charcoal/60">
                <span>${post.readTime}</span>
                <span>${post.views.toLocaleString()} views</span>
            </div>
        </div>
    `).join('');
}

// Counters animation
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const start = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(progress * target);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Mini chart
function initializeMiniChart() {
    const chartContainer = document.getElementById('miniChart');
    
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    
    const option = {
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        xAxis: {
            type: 'category',
            show: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                color: '#9CAF88',
                width: 2
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(156, 175, 136, 0.3)'
                    }, {
                        offset: 1, color: 'rgba(156, 175, 136, 0.05)'
                    }]
                }
            }
        }]
    };
    
    chart.setOption(option);
    
    // Animate chart data
    setInterval(() => {
        const newData = Array.from({length: 7}, () => Math.floor(Math.random() * 1000) + 500);
        chart.setOption({
            series: [{
                data: newData
            }]
        });
    }, 5000);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Newsletter form
function initializeNewsletterForm() {
    const form = document.querySelector('.newsletter-form form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector('button[type="submit"]');
        
        // Animate button
        button.textContent = 'Subscribing...';
        button.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            button.textContent = 'Subscribed!';
            button.style.background = '#7A8471';
            
            setTimeout(() => {
                button.textContent = 'Subscribe';
                button.disabled = false;
                button.style.background = '';
                this.reset();
            }, 2000);
        }, 1000);
    });
}

// Load more functionality
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    currentPage++;
    renderBlogPosts();
});

// Open article function
function openArticle(postId) {
    // In a real application, this would navigate to the article page
    window.location.href = `article.html?id=${postId}`;
}

// Live metrics simulation
function updateLiveMetrics() {
    const totalViews = document.getElementById('totalViews');
    const engagementRate = document.getElementById('engagementRate');
    const activeReaders = document.getElementById('activeReaders');
    
    setInterval(() => {
        // Simulate live data updates
        const currentViews = parseInt(totalViews.textContent.replace(/,/g, '')) || 0;
        const newViews = currentViews + Math.floor(Math.random() * 50) + 10;
        totalViews.textContent = newViews.toLocaleString();
        
        const newEngagement = (Math.random() * 5 + 7).toFixed(1);
        engagementRate.textContent = newEngagement + '%';
        
        const newReaders = Math.floor(Math.random() * 100) + 50;
        activeReaders.textContent = newReaders.toLocaleString();
    }, 5000);
}

// Initialize live metrics
updateLiveMetrics();

// Reading progress simulation for blog cards
function simulateReadingProgress() {
    const progressBars = document.querySelectorAll('.reading-progress-bar');
    
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            const randomProgress = Math.random() * 100;
            bar.style.width = randomProgress + '%';
        }, index * 200);
    });
}

// Simulate reading progress when posts are rendered
setTimeout(simulateReadingProgress, 1000);