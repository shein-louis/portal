// News Portal JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');
    
    // News data (can be loaded from JSON file)
    const newsData = [
        {
            id: 1,
            title: "Inovasi Terbaru dalam Bidang AI: Masa Depan Teknologi",
            description: "Perkembangan teknologi AI semakin pesat dengan penemuan baru yang mengubah cara kita berinteraksi dengan mesin. Inovasi ini diprediksi akan merevolusi berbagai industri dalam dekade mendatang.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Teknologi",
            date: "2025-02-15"
        },
        {
            id: 2,
            title: "Timnas Indonesia Sukses Raih Kemenangan di Kualifikasi Piala Dunia",
            description: "Dengan permainan menawan, Timnas Indonesia berhasil meraih kemenangan penting dalam laga kualifikasi Piala Dunia 2026. Ini menjadi sejarah baru bagi sepakbola Indonesia.",
            image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
            category: "Olahraga",
            date: "2025-02-14"
        },
        {
            id: 3,
            title: "Tutorial Cara nonton ++",
            description: "Kalian klik tombol dibawah sampai buka pencarian google gitu terus scroll sampe bawah, sampe nemu tombol dengan tulisan link here, dan pencet, kalau nggak keluar tombolnya kalian back dan pencet tombol dibawah sampe muncul.",
            image: "https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Ekonomi",
            date: "2025-02-13"
        },
        {
            id: 4,
            title: "Festival Film Internasional Kembali Digelar dengan Penuh Antusiasme",
            description: "Festival film internasional tahunan kembali digelar dengan partisipasi lebih dari 50 negara. Acara ini menjadi ajang pertukaran budaya melalui seni perfilman.",
            image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Hiburan",
            date: "2025-02-12"
        },
        {
            id: 5,
            title: "Penemuan Baru dalam Pengobatan Kanker Memberikan Harapan Baru",
            description: "Para peneliti berhasil menemukan terapi baru untuk pengobatan kanker yang menunjukkan hasil signifikan dalam uji klinis. Penemuan ini memberi harangan bagi jutaan pasien di seluruh dunia.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Kesehatan",
            date: "2025-02-11"
        },
        {
            id: 6,
            title: "Startup Fintech Lokal Raih Pendanaan Terbesar di Asia Tenggara",
            description: "Sebuah startup fintech asal Indonesia berhasil meraih pendanaan senilai ratusan juta dolar dari investor global. Ini menjadi pendanaan terbesar untuk startup teknologi finansial di kawasan Asia Tenggara.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Ekonomi",
            date: "2025-02-10"
        },
        {
            id: 7,
            title: "Reformasi Pendidikan: Kurikulum Baru Diterapkan Tahun Depan",
            description: "Kementerian Pendidikan mengumumkan penerapan kurikulum baru yang berfokus pada pengembangan keterampilan abad 21. Perubahan ini diharapkan dapat meningkatkan kualitas pendidikan nasional.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Pendidikan",
            date: "2025-02-09"
        },
        {
            id: 8,
            title: "Konferensi Perubahan Iklim Global Hasilkan Kesepakatan Baru",
            description: "Konferensi perubahan iklim global menghasilkan kesepakatan baru dalam upaya pengurangan emisi karbon. Negara-negara peserta berkomitmen untuk mencapai target lebih ambisius.",
            image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Lingkungan",
            date: "2025-02-08"
        },
        {
            id: 9,
            title: "Pameran Seni Kontemporer Tampilkan Karya Terbaik dari 30 Negara",
            description: "Pameran seni kontemporer internasional menampilkan karya-karya terbaik dari 30 negara di dunia. Acara ini menjadi ajang apresiasi seni modern dengan berbagai ekspresi budaya.",
            image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1458&q=80",
            category: "Budaya",
            date: "2025-02-07"
        }
    ];
    
    // Format date function
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    }
    
    // Get category color
    function getCategoryColor(category) {
        const colors = {
            'Teknologi': 'bg-category-tech',
            'Olahraga': 'bg-category-sport',
            'Hiburan': 'bg-category-entertainment',
            'Ekonomi': 'bg-category-economy',
            'Kesehatan': 'bg-category-health',
            'Pendidikan': 'bg-category-education',
            'Lingkungan': 'bg-green-600',
            'Budaya': 'bg-purple-600'
        };
        return colors[category] || 'bg-gray-600';
    }
    
    // Create news card
    function createNewsCard(news) {
        const card = document.createElement('div');
        card.className = 'news-card bg-white rounded-xl overflow-hidden animate-fade-in';
        card.dataset.category = news.category;
        
        const formattedDate = formatDate(news.date);
        const categoryColor = getCategoryColor(news.category);
        
        card.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${news.image}" alt="${news.title}" 
                     class="news-image w-full"
                     loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'">
                <div class="absolute top-4 left-4">
                    <span class="category-badge ${categoryColor} text-white">${news.category}</span>
                </div>
            </div>
            <div class="p-6">
                <div class="news-date mb-3 text-gray-500 text-sm">
                    <i class="far fa-calendar-alt mr-2"></i>${formattedDate}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">${news.title}</h3>
                <p class="text-gray-600 mb-5 line-clamp-3">${news.description}</p>
                <button class="read-more-btn" data-id="${news.id}">
                    Baca Selengkapnya <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        `;
        
        // Add click event
        const readMoreBtn = card.querySelector('.read-more-btn');
        readMoreBtn.addEventListener('click', function() {
            showNewsModal(news, formattedDate, categoryColor);
            
            // Track with Monetag
            if (typeof monetag !== 'undefined') {
                monetag.track('news_click', {
                    id: news.id,
                    category: news.category,
                    title: news.title
                });
            }
        });
        
        return card;
    }
    
    // Show news modal
function showNewsModal(news, formattedDate, categoryColor) {
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-content w-full max-w-2xl">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <span class="category-badge ${categoryColor} text-white">
                                ${news.category}
                            </span>
                            <p class="text-gray-500 text-sm mt-2">
                                <i class="far fa-calendar-alt mr-1"></i>${formattedDate}
                            </p>
                        </div>
                        <button class="modal-close text-gray-500 hover:text-gray-700 text-2xl">
                            &times;
                        </button>
                    </div>
                    
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">${news.title}</h2>
                    
                    <img src="${news.image}" alt="${news.title}" 
                         class="w-full h-auto rounded-lg mb-6">
                    
                    <div class="text-gray-700 leading-relaxed space-y-4">
                        <p>${news.description}</p>
                    </div>
                    
                    <div class="mt-8 pt-6 border-t border-gray-200">
                        <a href="https://otieu.com/4/10275861" 
                           class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                           onclick="event.preventDefault(); alert('Link nonton akan tersedia!');">
                            <i class="fas fa-video mr-2"></i> Link Nonton
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv);
    
    // Add event listeners
    const overlay = modalDiv.querySelector('.modal-overlay');
    const modalCloseBtn = modalDiv.querySelector('.modal-close');
    
    function closeModal() {
        overlay.style.animation = 'fadeOut 0.3s ease';
        overlay.querySelector('.modal-content').style.animation = 'slideDown 0.3s ease';
        setTimeout(() => modalDiv.remove(), 300);
    }
    
    overlay.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    modalCloseBtn.addEventListener('click', closeModal);
}
    
    // Render all news
    function renderNews() {
        newsContainer.innerHTML = '';
        newsData.forEach(news => {
            const newsCard = createNewsCard(news);
            newsContainer.appendChild(newsCard);
        });
        
        console.log(`✅ ${newsData.length} berita berhasil dimuat`);
    }
    
    // Initialize
    renderNews();
    
    // Add CSS for modal animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        @keyframes slideDown {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(20px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});