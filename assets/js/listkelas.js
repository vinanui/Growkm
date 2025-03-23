// Wait for page to load
window.onload = function() {
    // Get all important elements
    const filterBtn = document.querySelector('.search-btn');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const pageNumbers = document.querySelectorAll('.page-number');
    const joinButtons = document.querySelectorAll('.join-btn');
    
    // Set starting page
    let currentPage = 1;
    
    // Filter button click
    filterBtn.onclick = function() {
        // Get filter values
        let methodType = document.getElementById('metode').value;
        let location = document.getElementById('lokasi').value;
        let category = document.getElementById('kategori').value;
        
        // Get all class cards
        let cards = document.querySelectorAll('.class-card');
        
        // Check each card
        cards.forEach(function(card) {
            let tags = card.querySelectorAll('.tag');
            let isOnline = false;
            
            // Check if card has Online tag
            tags.forEach(function(tag) {
                if (tag.textContent === 'Online') {
                    isOnline = true;
                }
            });
            
            // Show or hide based on method type
            if (methodType === 'Online') {
                card.style.display = isOnline ? 'block' : 'none';
            } else {
                card.style.display = !isOnline ? 'block' : 'none';
            }
        });
    };
    
    // Join button clicks
    joinButtons.forEach(function(btn) {
        btn.onclick = function() {
            let className = this.closest('.class-card').querySelector('h3').textContent;
            alert('Anda akan bergabung dengan kelas: ' + className);
        };
    });
    
    // Page number clicks
    pageNumbers.forEach(function(btn) {
        btn.onclick = function() {
            currentPage = parseInt(this.textContent);
            updatePages();
        };
    });
    
    // Previous button click
    prevBtn.onclick = function() {
        if (currentPage > 1) {
            currentPage = currentPage - 1;
            updatePages();
        }
    };
    
    // Next button click
    nextBtn.onclick = function() {
        if (currentPage < pageNumbers.length) {
            currentPage = currentPage + 1;
            updatePages();
        }
    };
    
    // Update page display
    function updatePages() {
        // Update page numbers
        pageNumbers.forEach(function(btn) {
            if (parseInt(btn.textContent) === currentPage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update buttons
        prevBtn.disabled = (currentPage === 1);
        nextBtn.disabled = (currentPage === pageNumbers.length);
        
        // For testing
        console.log('Halaman:', currentPage);
    }
}; 