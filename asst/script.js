// DOM Elements
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const previewContainer = document.getElementById('preview-container');
const imagePreview = document.getElementById('image-preview');
const cancelUpload = document.getElementById('cancel-upload');
const uploadForm = document.getElementById('upload-form');

// Handle drag and drop
uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', function() {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    if (e.dataTransfer.files.length > 0) {
        handleFile(e.dataTransfer.files[0]);
    }
});

// Handle file selection via button
uploadArea.addEventListener('click', function() {
    fileInput.click();
});

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        handleFile(fileInput.files[0]);
    }
});

// Process selected file
function handleFile(file) {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
    }
    
    // Create preview
    const reader = new FileReader();
    
    reader.onload = function(e) {
        // Show preview container
        previewContainer.classList.remove('hidden');
        uploadArea.classList.add('hidden');
        
        // Create image element
        imagePreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Preview';
        imagePreview.appendChild(img);
    };
    
    reader.readAsDataURL(file);
}

// Cancel upload button
cancelUpload.addEventListener('click', function() {
    resetUpload();
});

// Reset upload
function resetUpload() {
    previewContainer.classList.add('hidden');
    uploadArea.classList.remove('hidden');
    fileInput.value = '';
    document.getElementById('description').value = '';
}

// Form submission
uploadForm.addEventListener('submit', function(e) {
    if (fileInput.files.length === 0) {
        e.preventDefault();
        alert('Please select an image to upload');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.testimonial-controls .prev');
    const nextButton = document.querySelector('.testimonial-controls .next');
    
    if (testimonials.length > 0) {
        let currentIndex = 0;
        
        // Function to show a specific testimonial
        function showTestimonial(index) {
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show the selected testimonial and activate its dot
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            
            currentIndex = index;
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
        });
        
        // Event listeners for prev/next buttons
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) {
                    newIndex = testimonials.length - 1;
                }
                showTestimonial(newIndex);
            });
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                let newIndex = currentIndex + 1;
                if (newIndex >= testimonials.length) {
                    newIndex = 0;
                }
                showTestimonial(newIndex);
            });
        }
        
        // Auto-rotate testimonials
        setInterval(() => {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) {
                newIndex = 0;
            }
            showTestimonial(newIndex);
        }, 5000);
    }
    
    // Documentation page tab navigation
    const docNavLinks = document.querySelectorAll('.doc-nav a');
    const docSections = document.querySelectorAll('.doc-section');
    
    if (docNavLinks.length > 0) {
        docNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all links
                docNavLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Get the target section id from the href
                const targetId = this.getAttribute('href').substring(1);
                
                // Hide all sections
                docSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show the target section
                document.getElementById(targetId).classList.add('active');
            });
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Simulate form submission (in a real application, you would send this to a server)
            console.log('Form submitted:', formDataObj);
            
            // Show success message
            if (formMessage) {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.classList.add('success');
                formMessage.classList.remove('hidden', 'error');
            }
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                if (formMessage) {
                    formMessage.classList.add('hidden');
                }
            }, 5000);
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission (in a real application, you would send this to a server)
            console.log('Newsletter subscription:', email);
            
            // Show success message (using alert for simplicity)
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            this.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('gallery-search-input');
    const searchButton = document.getElementById('gallery-search-btn');
    const noResults = document.getElementById('no-results');
    const resetFilters = document.getElementById('reset-filters');
    const loadMoreButton = document.getElementById('load-more');

    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    const currentIndexElement = document.getElementById('current-index');
    const totalCountElement = document.getElementById('total-count');

    let currentFilter = 'all';
    let currentSearch = '';
    let itemsPerPage = 8;
    let currentPage = 1;
    let currentModalIndex = 0;

    initGallery();

    function initGallery() {
        updateGalleryDisplay();
        if (totalCountElement) totalCountElement.textContent = galleryItems.length;
    }

    function filterGalleryItems() {
        let visibleItems = galleryItems.filter(item => {
            const category = item.dataset.category;
            const tags = item.dataset.tags.toLowerCase();
            const searchMatch = !currentSearch || tags.includes(currentSearch.toLowerCase()) || item.textContent.toLowerCase().includes(currentSearch.toLowerCase());
            const categoryMatch = currentFilter === 'all' || category === currentFilter;
            return searchMatch && categoryMatch;
        });

        galleryItems.forEach(item => item.style.display = 'none');
        visibleItems.slice(0, itemsPerPage * currentPage).forEach(item => item.style.display = 'block');

        noResults.classList.toggle('hidden', visibleItems.length > 0);
        loadMoreButton.style.display = visibleItems.length > itemsPerPage * currentPage ? 'inline-block' : 'none';

        return visibleItems;
    }

    function updateGalleryDisplay() {
        const visibleItems = filterGalleryItems();
        galleryItems.forEach(item => item.classList.toggle('fade-in', item.style.display === 'block'));
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            currentPage = 1;
            updateGalleryDisplay();
        });
    });

    searchButton?.addEventListener('click', () => {
        currentSearch = searchInput.value.trim();
        currentPage = 1;
        updateGalleryDisplay();
    });

    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearch = searchInput.value.trim();
            currentPage = 1;
            updateGalleryDisplay();
        }
    });

    resetFilters?.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        currentFilter = 'all';
        filterButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'all'));
        currentPage = 1;
        updateGalleryDisplay();
    });

    loadMoreButton?.addEventListener('click', () => {
        currentPage++;
        updateGalleryDisplay();
    });

    function getVisibleItems() {
        return galleryItems.filter(item => item.style.display === 'block');
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const visibleItems = getVisibleItems();
            currentModalIndex = visibleItems.indexOf(this);
            updateModal(currentModalIndex, visibleItems);
            galleryModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    function updateModal(index, items) {
        const item = items[index];
        const img = item.querySelector('img');
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalTitle.textContent = item.querySelector('h4').textContent;
        modalDescription.textContent = item.querySelector('p').textContent;
        currentIndexElement.textContent = index + 1;
    }

    function closeModal() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    galleryModal.addEventListener('click', (e) => { if (e.target === galleryModal) closeModal(); });

    modalPrev.addEventListener('click', () => {
        const visibleItems = getVisibleItems();
        currentModalIndex = (currentModalIndex - 1 + visibleItems.length) % visibleItems.length;
        updateModal(currentModalIndex, visibleItems);
    });

    modalNext.addEventListener('click', () => {
        const visibleItems = getVisibleItems();
        currentModalIndex = (currentModalIndex + 1) % visibleItems.length;
        updateModal(currentModalIndex, visibleItems);
    });

    document.addEventListener('keydown', (e) => {
        if (galleryModal.style.display === 'flex') {
            const visibleItems = getVisibleItems();
            if (e.key === 'ArrowLeft') {
                currentModalIndex = (currentModalIndex - 1 + visibleItems.length) % visibleItems.length;
                updateModal(currentModalIndex, visibleItems);
            } else if (e.key === 'ArrowRight') {
                currentModalIndex = (currentModalIndex + 1) % visibleItems.length;
                updateModal(currentModalIndex, visibleItems);
            } else if (e.key === 'Escape') {
                closeModal();
            }
        }
    });

    document.head.insertAdjacentHTML('beforeend', `
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .fade-in { animation: fadeIn 0.5s ease forwards; }
        </style>
    `);
});

// EVENT
// Event data - in a real application, this would come from a database or API
const eventData = {
    event1: {
        title: "business in the month of ramadhan",
        date: "March 5, 2025",
        time: "9:00 AM - 6:00 PM",
        location: "Cluster Puri permata 1, gerbang",
        image: "assets/img/WhatsApp Image 2025-03-07 at 16.24.48_2253d41f.jpg",
        description: "Tim kami berjualan di bulan ramadhan untuk berbuka puasa, serta menambah pemasukan untuk membuat kegiatan kedepannya. <br> Menu yang kami tawarkan memiliki 2 jenis yaitu Es kuwet dan Cappocino cincau.",
        speakers: ["Elon Musk", "Sundar Pichai", "Lisa Su", "Jensen Huang"],
        price: "$299",
        capacity: "1500 attendees",
        organizer: "TechFuture Association"
    },
    event2: {
        title: "Spring Music Festival",
        date: "April 22-23, 2025",
        time: "12:00 PM - 11:00 PM",
        location: "Central Park, New York",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "The Spring Music Festival is a two-day celebration of music featuring over 40 artists across 5 stages. From rock and pop to electronic and hip-hop, there's something for every music lover. Enjoy food from local vendors, art installations, and interactive experiences throughout the festival grounds. This year's headliners include Grammy-winning artists and emerging talents that are redefining the music landscape.",
        performers: ["Taylor Swift", "The Weeknd", "Billie Eilish", "Kendrick Lamar", "Coldplay"],
        price: "$150 for 2-day pass",
        capacity: "50,000 attendees per day",
        organizer: "Melody Productions"
    },
    event3: {
        title: "International Food Festival",
        date: "May 10-12, 2025",
        time: "11:00 AM - 9:00 PM",
        location: "Downtown Plaza, Chicago",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Experience culinary delights from over 30 countries at the International Food Festival. This three-day gastronomic adventure features authentic dishes prepared by renowned chefs and local restaurants. Visitors can enjoy live cooking demonstrations, food workshops, and cultural performances representing diverse culinary traditions. The festival also includes a marketplace where you can purchase specialty ingredients, cookbooks, and kitchen tools.",
        cuisines: ["Italian", "Japanese", "Mexican", "Indian", "French", "Thai", "Brazilian"],
        price: "$25 entry fee, food purchased separately",
        capacity: "25,000 visitors per day",
        organizer: "Global Gastronomy Group"
    }
};

// DOM elements
const modal = document.getElementById('eventModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close-modal');
const seeMoreButtons = document.querySelectorAll('.see-more-btn');

// Add event listeners to all "See More" buttons
seeMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const eventId = this.getAttribute('data-event-id');
        openEventDetails(eventId);
    });
});

// Close modal when clicking the X
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Function to open event details modal
function openEventDetails(eventId) {
    const event = eventData[eventId];
    
    if (!event) return;
    
    // Create HTML for the modal content
    let modalHTML = `
        <div class="event-full-details">
            <div class="event-header">
                <div class="event-header-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <div class="event-title-info">
                    <h2>${event.title}</h2>
                    <div class="event-meta">
                        <div class="event-meta-item">
                            <span>📅</span>
                            <span>${event.date}</span>
                        </div>
                        <div class="event-meta-item">
                            <span>📍</span>
                            <span>${event.location}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="event-description">
                <p>${event.description}</p>
            </div>
            
            <div class="event-details-list">
    `;
    
    
    // Set the modal content and display the modal
    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    
    // Add event listener to the register button
    const registerBtn = modalContent.querySelector('.register-btn');
    registerBtn.addEventListener('click', function() {
        alert(`Thank you for your interest in ${event.title}! Registration form would open here.`);
    });
}