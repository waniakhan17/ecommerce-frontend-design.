document.querySelector(".search-button").addEventListener("click",()=>{
    alert("Search clicked");
});

document.addEventListener('DOMContentLoaded', () => {
    // Functionality for "See all" buttons
    const seeAllButtons = document.querySelectorAll('.seeAll');

    seeAllButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetList = document.getElementById(targetId);

            if (targetList) {
                targetList.classList.toggle('expanded');
                if (targetList.classList.contains('expanded')) {
                    button.textContent = 'See less';
                } else {
                    button.textContent = 'See all';
                }
            }
        });
    });

    // Functionality for dropdown sections (Price range, Condition, etc.)
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            if (content && content.classList.contains('dropdown-cont')) {
                content.classList.toggle('show');
                toggle.classList.toggle('active');
            }
        });
    });

    // Optional: Price range slider value display
    const priceRangeSlider = document.getElementById('priceR');
    const priceValueSpan = document.getElementById('priceValue');

    if (priceRangeSlider && priceValueSpan) {
        priceRangeSlider.addEventListener('input', () => {
            priceValueSpan.textContent = `$${priceRangeSlider.value}`;
        });
    }

    const listViewBtn = document.getElementById('listViewBtn');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const productList = document.getElementById('productList');

    // Function to set the layout
    function setLayout(layout) {
        if (layout === 'grid') {
            productList.classList.add('grid-view');
            // You might want to add an 'active' class to the grid button
            gridViewBtn.classList.add('active-layout');
            listViewBtn.classList.remove('active-layout');
        } else {
            productList.classList.remove('grid-view');
            // You might want to add an 'active' class to the list button
            listViewBtn.classList.add('active-layout');
            gridViewBtn.classList.remove('active-layout');
        }
        // Store the preference in localStorage to remember it across sessions
        localStorage.setItem('productLayout', layout);
    }

    // Event listeners for the buttons
    listViewBtn.addEventListener('click', () => {
        setLayout('list');
    });

    gridViewBtn.addEventListener('click', () => {
        setLayout('grid');
    });

    // Check for a saved layout preference on page load
    const savedLayout = localStorage.getItem('productLayout');
    if (savedLayout) {
        setLayout(savedLayout);
    } else {
        // Default to list view if no preference is saved
        setLayout('list');
    }
});

let count=0;//cart count
function addtoCart(){
    count++;
    console.log("Cart updated",count);
    alert("Item added to cart");
}