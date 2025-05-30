document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan semua elemen produk
    const produkElements = document.querySelectorAll('.produk');

    produkElements.forEach(function(produk) {
        // Mendapatkan teks status dan mengubah menjadi huruf kecil
        const statusElement = produk.querySelector('.status');
        const statusText = statusElement.textContent.trim().toLowerCase();

        // Menghapus kelas status sebelumnya
        produk.classList.remove('tersedia', 'tidak-tersedia');

        // Menambahkan kelas berdasarkan status
        if (statusText === 'tersedia') {
            produk.classList.add('tersedia');
            statusElement.classList.add('tersedia');
        } else if (statusText === 'tidak tersedia') {
            produk.classList.add('tidak-tersedia');
            statusElement.classList.add('tidak-tersedia');
        }
    });

    // Mengatur filter produk
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.produk');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            products.forEach(product => {
                if (filter === 'all') {
                    product.classList.remove('hidden');
                } else if (filter === 'tersedia') {
                    if (product.classList.contains('tersedia')) {
                        product.classList.remove('hidden');
                    } else {
                        product.classList.add('hidden');
                    }
                } else if (filter === 'tidak-tersedia') {
                    if (product.classList.contains('tidak-tersedia')) {
                        product.classList.remove('hidden');
                    } else {
                        product.classList.add('hidden');
                    }
                }
            });
        });
    });
});
