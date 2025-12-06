// news.js - Berita dengan data embedded
document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');
    
    // Data berita langsung dalam JavaScript
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
            title: "Kebijakan Ekonomi Baru Diumumkan Pemerintah untuk Stabilisasi Harga",
            description: "Pemerintah mengumumkan serangkaian kebijakan ekonomi baru yang bertujuan untuk menstabilkan harga kebutuhan pokok dan mendorong pertumbuhan ekonomi nasional.",
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
            description: "Para peneliti berhasil menemukan terapi baru untuk pengobatan kanker yang menunjukkan hasil signifikan dalam uji klinis. Penemuan ini memberi harapan bagi jutaan pasien di seluruh dunia.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Kesehatan",
            date: "2025-02-11"
        },
        {
            id: 6,
            title: "Startup Fintech Lokal Raih Pendanaan Terbesar di Asia Tenggara",
            description: "Sebuah startup fintech asal Indonesia berhasil meraih pendanaan senilai ratusan juta dolar dari investor global. Ini menjadi pendanaan terbesar untuk startup teknologi finansial di kawasan Asia Tenggara.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            category: "Bisnis",
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

    // Fungsi untuk membuat card berita
    function createNewsCard(news) {
        const card = document.createElement('div');
        card.className = 'news-card bg-white rounded-xl overflow-hidden fade-in';
        
        // Format tanggal
        const formattedDate = formatDate(news.date);
        
        // Tentukan warna kategori
        const categoryColor = getCategoryColor(news.category);
        
        // Isi konten card
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
                <a href="#" class="read-more-btn inline-flex items-center" data-id="${news.id}">
                    Baca Selengkapnya <i class="fas fa-arrow-right ml-2 text-sm"></i>
                </a>
            </div>
        `;
        
        // Event listener untuk tombol
        const readMoreBtn = card.querySelector('.read-more-btn');
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const newsId = this.getAttribute('data-id');
            const selectedNews = newsData.find(item => item.id == newsId);
            
            if (selectedNews) {
                // Simulasi pembukaan berita
                const modalHTML = `
                    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div class="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div class="p-6">
                                <div class="flex justify-between items-start mb-4">
                                    <div>
                                        <span class="${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium">
                                            ${selectedNews.category}
                                        </span>
                                        <p class="text-gray-500 text-sm mt-2">
                                            <i class="far fa-calendar-alt mr-1"></i>${formattedDate}
                                        </p>
                                    </div>
                                    <button class="text-gray-500 hover:text-gray-700 text-2xl" onclick="this.closest('.fixed').remove()">
                                        &times;
                                    </button>
                                </div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-4">${selectedNews.title}</h2>
                                <img src="${selectedNews.image}" alt="${selectedNews.title}" 
                                     class="w-full h-auto rounded-lg mb-6">
                                <div class="text-gray-700 leading-relaxed">
                                    <p class="mb-4">${selectedNews.description}</p>
                                    <p class="mb-4">Ini adalah simulasi konten berita lengkap. Dalam implementasi nyata, di sini akan berisi artikel berita yang lengkap dengan beberapa paragraf, gambar tambahan, dan informasi detail.</p>
                                    <p>Berita ini berasal dari sumber terpercaya dan telah melalui proses verifikasi fakta untuk memastikan keakuratan informasi yang disajikan.</p>
                                </div>
                                <div class="mt-8 pt-6 border-t border-gray-200">
                                    <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                        <i class="fas fa-share-alt mr-2"></i> Bagikan Berita
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                // Tambahkan modal ke body
                const modalDiv = document.createElement('div');
                modalDiv.innerHTML = modalHTML;
                document.body.appendChild(modalDiv);
                
                // Tambahkan event untuk close modal
                modalDiv.querySelector('.fixed').addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.remove();
                    }
                });
                
                // Monetag tracking untuk klik berita
                if (typeof monetag !== 'undefined' && typeof monetag.track === 'function') {
                    monetag.track('news_click', { id: newsId, category: selectedNews.category });
                }
            }
        });
        
        return card;
    }
    
    // Fungsi untuk memformat tanggal
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    }
    
    // Fungsi untuk menentukan warna berdasarkan kategori
    function getCategoryColor(category) {
        const colors = {
            'Teknologi': 'bg-blue-600',
            'Olahraga': 'bg-green-600',
            'Ekonomi': 'bg-red-600',
            'Hiburan': 'bg-purple-600',
            'Kesehatan': 'bg-teal-600',
            'Bisnis': 'bg-yellow-600',
            'Pendidikan': 'bg-pink-600',
            'Lingkungan': 'bg-indigo-600',
            'Budaya': 'bg-amber-600'
        };
        
        return colors[category] || 'bg-gray-600';
    }
    
    // Render semua berita
    function renderNews() {
        newsContainer.innerHTML = '';
        newsData.forEach(news => {
            const newsCard = createNewsCard(news);
            newsContainer.appendChild(newsCard);
        });
        
        // Monetag tracking untuk page view
        setTimeout(() => {
            if (typeof monetag !== 'undefined' && typeof monetag.track === 'function') {
                monetag.track('page_view', { page: 'home', item_count: newsData.length });
            }
        }, 1000);
    }
    
    // Inisialisasi
    renderNews();
});