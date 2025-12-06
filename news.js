// Fungsi untuk memuat dan menampilkan berita dari JSON
document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');
    
    // Fungsi untuk memuat data berita dari JSON
    async function loadNews() {
        try {
            // Mengambil data dari file JSON
            const response = await fetch('data/news.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const newsData = await response.json();
            
            // Kosongkan container loading
            newsContainer.innerHTML = '';
            
            // Render setiap berita
            newsData.forEach(news => {
                const newsCard = createNewsCard(news);
                newsContainer.appendChild(newsCard);
            });
            
            console.log(`${newsData.length} berita berhasil dimuat`);
            
        } catch (error) {
            console.error('Gagal memuat berita:', error);
            showError();
        }
    }
    
    // Fungsi untuk membuat card berita
    function createNewsCard(news) {
        // Buat elemen card
        const card = document.createElement('div');
        card.className = 'news-card bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden fade-in';
        
        // Format tanggal
        const formattedDate = formatDate(news.date);
        
        // Tentukan warna kategori
        const categoryColor = getCategoryColor(news.category);
        
        // Isi konten card
        card.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${news.image}" alt="${news.title}" class="news-image w-full hover:scale-105 transition-transform duration-500">
                <div class="absolute top-4 left-4">
                    <span class="category-badge ${categoryColor} text-white">${news.category}</span>
                </div>
            </div>
            <div class="p-6">
                <div class="news-date mb-3">
                    <i class="far fa-calendar-alt mr-2"></i>${formattedDate}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">${news.title}</h3>
                <p class="text-gray-600 mb-5 line-clamp-3">${news.description}</p>
                <a href="#" class="read-more-btn">
                    Baca Selengkapnya <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        `;
        
        // Tambahkan event listener untuk tombol baca selengkapnya
        const readMoreBtn = card.querySelector('.read-more-btn');
        readMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert(`Membuka berita: "${news.title}"\n\nID: ${news.id}\nKategori: ${news.category}\nTanggal: ${formattedDate}`);
        });
        
        return card;
    }
    
    // Fungsi untuk menampilkan pesan error
    function showError() {
        newsContainer.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <i class="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Gagal Memuat Berita</h3>
                <p class="text-gray-600 mb-6">Maaf, terjadi kesalahan saat memuat data berita. Silakan coba lagi nanti.</p>
                <button id="retry-button" class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    <i class="fas fa-redo mr-2"></i> Coba Lagi
                </button>
            </div>
        `;
        
        // Tambahkan event listener untuk tombol coba lagi
        document.getElementById('retry-button').addEventListener('click', loadNews);
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
            'Politik': 'bg-red-600',
            'Hiburan': 'bg-purple-600',
            'Kesehatan': 'bg-teal-600',
            'Bisnis': 'bg-yellow-600',
            'Ekonomi': 'bg-indigo-600',
            'Pendidikan': 'bg-pink-600'
        };
        
        return colors[category] || 'bg-gray-600';
    }
    
    // Muat berita saat halaman dimuat
    loadNews();
});