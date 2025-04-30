// happy-customers.js - Simple Image Gallery
document.addEventListener('DOMContentLoaded', function() {
    // Image data - replace with your actual customer images
    const customerImages = [
        "images/customers/customer1.jpg",
        "images/customers/customer2.jpg",
        "images/customers/customer3.jpg",
        "images/customers/customer4.jpg",
        "images/customers/customer5.jpg",
        "images/customers/customer6.jpg",
        "images/customers/customer7.jpg",
        "images/customers/customer8.jpg",
        "images/customers/customer9.jpg",
        "images/customers/customer10.jpg",
        // Add all your remaining images here...
        "images/customers/customer50.jpg"
    ];

    // Configuration
    const IMAGES_PER_PAGE = 12;
    let currentPage = 1;
    const gallery = document.getElementById('customer-grid');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');

    // Display images for current page
    function displayImages() {
        gallery.innerHTML = '';
        const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
        const endIndex = Math.min(startIndex + IMAGES_PER_PAGE, customerImages.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = customerImages[i];
            img.alt = 'Happy customer';
            img.loading = 'lazy';
            
            imgContainer.appendChild(img);
            gallery.appendChild(imgContainer);
        }
        
        updatePaginationControls();
    }

    // Update pagination buttons
    function updatePaginationControls() {
        const totalPages = Math.ceil(customerImages.length / IMAGES_PER_PAGE);
        
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    }

    // Event listeners for pagination
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayImages();
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(customerImages.length / IMAGES_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            displayImages();
        }
    });

    // Initial load
    displayImages();
});