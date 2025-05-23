document.addEventListener('DOMContentLoaded', () => {
    const categoryNav = document.getElementById('category-nav');
    const menuItemsContainer = document.getElementById('menu-items-container');
    const menuHeader = document.getElementById('menu-header');
    const menuFooter = document.getElementById('menu-footer');
    const bodyElement = document.body;

    let menuConfigData = {}; // To store fetched config

    // Fetch menu data from JSON file
    fetch('menu-config.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            menuConfigData = data;
            setupHeaderAndFooter();
            populateCategories();
            setHotelBackground();
            // Optionally, display the first category by default
            if (data.categories && data.categories.length > 0) {
                // displayCategoryItems(data.categories[0].id);
                // setActiveButton(data.categories[0].id);
            }
        })
        .catch(error => {
            console.error("Could not load menu configuration:", error);
            menuItemsContainer.innerHTML = `<p style="color:red; text-align:center;">Error loading menu. Please try again later.</p>`;
        });

    function setupHeaderAndFooter() {
        menuHeader.innerHTML = `
            <h1 class="arabic-text">${menuConfigData.hotelName_ar}</h1>
            <h1 class="english-text">${menuConfigData.hotelName_en}</h1>
        `;
        menuFooter.innerHTML = `
            <p class="arabic-text">${menuConfigData.roomServiceNote_ar}</p>
            <p class="english-text">${menuConfigData.roomServiceNote_en}</p>
        `;
    }
    
    function setHotelBackground() {
        if (menuConfigData.hotelBackgroundImage) {
            bodyElement.style.backgroundImage = `url('${menuConfigData.hotelBackgroundImage}')`;
            bodyElement.classList.add('animate-bg'); // Add class for Ken Burns effect
        }
    }

    function populateCategories() {
        menuConfigData.categories.forEach(category => {
            const button = document.createElement('button');
            button.dataset.categoryId = category.id;
            button.innerHTML = `
                <span class="category-name-ar">${category.name_ar}</span>
                <span class="category-name-en">${category.name_en}</span>
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

        menuItemsContainer.innerHTML = ''; // Clear previous items
        
        // Set category-specific background
        if (category.backgroundImage) {
            menuItemsContainer.style.backgroundImage = `url('${category.backgroundImage}')`;
        } else {
            menuItemsContainer.style.backgroundImage = 'none'; // Or a default pattern
        }

        if (category.items && category.items.length > 0) {
            category.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('menu-item');
                
                // Handle potential missing descriptions gracefully
                const descAr = item.description_ar || "";
                const descEn = item.description_en || "";

                itemDiv.innerHTML = `
                    <div class="item-header">
                        <div class="item-name">
                            <span class="name-ar">${item.name_ar}</span>
                            <span class="name-en">${item.name_en}</span>
                        </div>
                        <div class="item-price">
                            <span class="price-val">${item.price.toLocaleString()}</span>
                            <span class="price-currency-ar arabic-text">${menuConfigData.currency_ar}</span>
                            <span class="price-currency-en english-text">(${menuConfigData.currency_en})</span>
                        </div>
                    </div>
                    ${ (descAr || descEn) ? 
                        `<div class="item-description">
                            ${descAr ? `<span class="desc-ar arabic-text">${descAr}</span>` : ''}
                            ${descEn ? `<span class="desc-en english-text">${descEn}</span>` : ''}
                        </div>`
                        : ''
                    }
                `;
                menuItemsContainer.appendChild(itemDiv);
            });
        } else {
            menuItemsContainer.innerHTML = `
                <p class="arabic-text" style="text-align:center; padding: 20px;">لا توجد أصناف في هذا القسم حالياً.</p>
                <p class="english-text" style="text-align:center; padding: 20px;">No items currently in this section.</p>
            `;
        }
    }

    function setActiveButton(categoryId) {
        const buttons = categoryNav.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.dataset.categoryId === categoryId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
});