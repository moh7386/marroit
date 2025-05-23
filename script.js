// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Elements
    const heroSection = document.getElementById('hero-section');
    const hotelLogoHero = document.getElementById('hotel-logo-hero');
    const welcomeTitleAr = document.getElementById('welcome-title-ar');
    const welcomeTitleEn = document.getElementById('welcome-title-en');
    const viewMenuBtn = document.getElementById('view-menu-btn');

    // Menu View Elements
    const menuView = document.getElementById('menu-view');
    const menuHeader = document.getElementById('menu-header');
    const hotelLogoHeader = document.getElementById('hotel-logo-header');
    const hotelNameArHeader = document.getElementById('hotel-name-ar-header');
    const hotelNameEnHeader = document.getElementById('hotel-name-en-header');
    const backToHeroBtn = document.getElementById('back-to-hero-btn');
    
    const categoryNav = document.getElementById('category-nav');
    const itemsDisplayArea = document.getElementById('items-display-area');
    const currentCategoryNameAr = document.getElementById('current-category-name-ar');
    const currentCategoryNameEn = document.getElementById('current-category-name-en');
    const menuItemsContainer = document.getElementById('menu-items-container');
    
    const menuFooter = document.getElementById('menu-footer');
    const roomServiceAr = document.getElementById('room-service-ar');
    const roomServiceEn = document.getElementById('room-service-en');
    const pageTitle = document.getElementById('pageTitle');


    if (typeof menuConfigData !== 'undefined') {
        setupInitialPage();
        populateCategories();
        setupEventListeners();

        // Display first category by default IF categories exist
        if (menuConfigData.categories && menuConfigData.categories.length > 0) {
            // Don't display initially, wait for button click or select first one for menu view
        }
    } else {
        console.error("Menu configuration (menuConfigData) is not loaded.");
        document.body.innerHTML = `<p style="color:red; text-align:center; padding: 20px;">Error: Menu configuration not found. Please check console.</p>`;
    }

    function setupInitialPage() {
        pageTitle.textContent = `${menuConfigData.hotelName_ar} | ${menuConfigData.hotelName_en}`;
        // Hero Section
        if (menuConfigData.hotelBackgroundImage) {
            heroSection.style.backgroundImage = `url('${menuConfigData.hotelBackgroundImage}')`;
        }
        if (menuConfigData.hotelLogo && hotelLogoHero) {
            hotelLogoHero.src = menuConfigData.hotelLogo;
            hotelLogoHero.alt = `${menuConfigData.hotelName_en} Logo`;
        } else if (hotelLogoHero) {
            hotelLogoHero.style.display = 'none';
        }
        welcomeTitleAr.textContent = menuConfigData.welcomeMessage_ar;
        welcomeTitleEn.textContent = menuConfigData.welcomeMessage_en;

        // Menu Header
        if (menuConfigData.hotelLogo && hotelLogoHeader) {
            hotelLogoHeader.src = menuConfigData.hotelLogo;
        } else if (hotelLogoHeader) {
            hotelLogoHeader.style.display = 'none';
        }
        hotelNameArHeader.textContent = menuConfigData.hotelName_ar;
        hotelNameEnHeader.textContent = menuConfigData.hotelName_en;
        
        // Footer
        roomServiceAr.textContent = menuConfigData.roomServiceNote_ar;
        roomServiceEn.textContent = menuConfigData.roomServiceNote_en;
    }

    function setupEventListeners() {
        viewMenuBtn.addEventListener('click', () => {
            heroSection.style.display = 'none';
            menuView.classList.remove('menu-view-hidden');
            menuView.classList.add('menu-view-visible');
            // Optionally, load the first category when menu is shown
            if (menuConfigData.categories && menuConfigData.categories.length > 0) {
                displayCategoryItems(menuConfigData.categories[0].id);
                setActiveButton(menuConfigData.categories[0].id);
            }
        });

        backToHeroBtn.addEventListener('click', () => {
            menuView.classList.remove('menu-view-visible');
            menuView.classList.add('menu-view-hidden');
            // Add a slight delay for the animation before showing hero
            setTimeout(() => {
                 heroSection.style.display = 'flex'; // or 'block' depending on your hero styling
            }, 500); // Match transition duration
        });
    }

    function populateCategories() {
        categoryNav.innerHTML = ''; // Clear any existing
        menuConfigData.categories.forEach(category => {
            const button = document.createElement('button');
            button.dataset.categoryId = category.id;
            
            let iconHtml = '';
            if (category.icon) {
                iconHtml = `<img src="${category.icon}" alt="" class="cat-icon"> `;
            }

            button.innerHTML = `
                ${iconHtml}
                <span class="category-name-ar arabic-text">${category.name_ar}</span>
                <span class="category-name-en english-text">${category.name_en}</span>
            `;
            button.addEventListener('click', () => {
                displayCategoryItems(category.id);
                setActiveButton(category.id);
            });
            categoryNav.appendChild(button);
        });
    }

    function displayCategoryItems(categoryId) {
        const category = menuConfigData.categories.find(cat => cat.id === categoryId);
        if (!category) return;

        // Update category title indicator
        currentCategoryNameAr.textContent = category.name_ar;
        currentCategoryNameEn.textContent = category.name_en;

        // Set category-specific background for the items display area
        if (category.backgroundImage) {
            itemsDisplayArea.style.backgroundImage = `url('${category.backgroundImage}')`;
        } else {
            itemsDisplayArea.style.backgroundImage = 'none'; // Or a default pattern
        }

        menuItemsContainer.innerHTML = ''; // Clear previous items
        menuItemsContainer.style.opacity = 0; // For fade-in effect

        if (category.items && category.items.length > 0) {
            category.items.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('menu-item');
                // Staggered animation delay
                itemDiv.style.animationDelay = `${index * 0.07}s`;
                
                let itemImageHtml = '';
                if (item.image) {
                    itemImageHtml = `
                        <div class="item-image-container">
                            <img src="${item.image}" alt="${item.name_en}">
                        </div>
                    `;
                }

                const descAr = item.description_ar || "";
                const descEn = item.description_en || "";

                itemDiv.innerHTML = `
                    ${itemImageHtml}
                    <div class="item-content">
                        <div class="item-name">
                            <span class="name-ar arabic-text">${item.name_ar}</span>
                            <span class="name-en english-text">${item.name_en}</span>
                        </div>
                        ${ (descAr || descEn) ? 
                            `<div class="item-description">
                                ${descAr ? `<span class="desc-ar arabic-text">${descAr}</span>` : ''}
                                ${descEn ? `<span class="desc-en english-text">${descEn}</span>` : ''}
                            </div>`
                            : '<div class="item-description" style="min-height: 2em;"></div>' // Placeholder for consistent height
                        }
                        <div class="item-price-section">
                            <span class="item-price">
                                <span class="price-val">${item.price.toLocaleString()}</span>
                                <span class="price-currency-ar arabic-text"> ${menuConfigData.currency_ar}</span>
                                <!-- <span class="price-currency-en english-text"> (${menuConfigData.currency_en})</span> -->
                            </span>
                        </div>
                    </div>
                `;
                menuItemsContainer.appendChild(itemDiv);
            });
        } else {
            menuItemsContainer.innerHTML = `
                <p class="no-items-message arabic-text" style="grid-column: 1 / -1;">لا توجد أصناف في هذا القسم حالياً.</p>
                <p class="no-items-message english-text" style="grid-column: 1 / -1;">No items currently in this section.</p>
            `;
        }
        // Fade in items
        setTimeout(() => { menuItemsContainer.style.opacity = 1; }, 50);
    }

    function setActiveButton(categoryId) {
        const buttons = categoryNav.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.toggle('active', button.dataset.categoryId === categoryId);
            if (button.dataset.categoryId === categoryId) {
                // Scroll the active button into view if categoryNav is scrollable
                button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
    }
});