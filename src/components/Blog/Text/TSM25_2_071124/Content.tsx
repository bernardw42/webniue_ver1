/* eslint-disable react/no-unescaped-entities */
"use client"

export default function Text() {
    // Function to scroll the page to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return(
        <div className="flex flex-col bg-white w-full h-full justify-center items-center px-[8%] pb-[50px] max-sm:pb-0">
            <div className="max-w-7xl flex flex-col pt-[15px] ">
                <p className="text-gray-500 text-[12px]">7 November 2024 | Nieu</p>
                <div className="text-justify flex flex-col mt-[30px] gap-y-[20px]">
                    <p className="text-black">
                    Dunia media sosial terus berkembang dengan pesat, dan di tahun 2025, ada sejumlah tren yang diprediksi akan mengubah cara bisnis berinteraksi dengan audiens. Platform media sosial tidak hanya menjadi tempat untuk berbagi konten, tetapi juga membangun hubungan yang lebih otentik dan mendalam dengan konsumen.
                    </p>
                    <p className="text-black ">
                    Berikut ini beberapa tren media sosial tahun 2025 yang perlu diperhatikan oleh bisnis:
                    </p>
                    <ol className="text-black list-decimal pl-8 space-y-6">
                        <li>
                            <strong className="text-[20px] font-semibold text-black">Konten Otentik dan Transparansi Akan Semakin Penting:</strong>
                            <p className="pb-[20px]">Pengguna media sosial semakin menginginkan konten yang otentik dan transparan dari brand yang mereka ikuti. Konsumen cenderung lebih menghargai kejujuran dan realitas di balik layar daripada gambar yang sempurna. Mereka ingin melihat sisi humanis dari bisnis dan keterbukaan dalam komunikasi.</p>
                            
                            <strong className=" font-semibold text-black">Bagaimana ini mempengaruhi bisnis?</strong>
                            <p>Bisnis harus lebih fokus pada storytelling yang jujur dan menggambarkan kehidupan sehari-hari yang relatable, menggunakan konten behind-the-scenes dan respons yang terbuka terhadap kritik.</p>
                        </li>

                        <li>
                            <strong className="text-[20px] font-semibold text-black">Penggunaan Micro-Influencers dan Nano-Influencers Semakin Meningkat:</strong>
                            <p className="pb-[20px]">Tren penggunaan <strong>micro-influencers</strong> (10.000-100.000 pengikut) dan <strong>nano-influencers</strong> (1.000-10.000 pengikut) akan terus tumbuh. Influencer ini dianggap lebih "nyata" dibanding influencer besar.</p>
                            
                            <strong className="font-semibold text-black">Bagaimana ini mempengaruhi bisnis?</strong>
                            <p>Brand akan beralih ke micro- dan nano-influencers untuk promosi produk karena mereka memberikan engagement yang lebih tinggi dan lebih otentik.</p>
                        </li>

                        <li>
                            <strong className="text-[20px] font-semibold text-black">Social Commerce yang Makin Dominan:</strong>
                            <p className="pb-[20px]">Pembelian produk langsung melalui platform media sosial akan menjadi semakin umum. Konsumen dapat berbelanja langsung tanpa meninggalkan aplikasi.</p>
                            
                            <strong className="font-semibold text-black">Bagaimana ini mempengaruhi bisnis?</strong>
                            <p>Bisnis perlu memanfaatkan fitur-fitur belanja langsung di media sosial, seperti katalog produk dan opsi pembayaran yang mudah untuk meningkatkan penjualan.</p>
                        </li>

                        <li>
                            <strong className="text-[20px] font-semibold text-black">Konten Pendek dan Reels Masih Merajai:</strong>
                            <p className="pb-[20px]">Format video pendek seperti TikTok, Instagram Reels, dan YouTube Shorts akan tetap diminati karena cocok untuk menarik perhatian cepat dan menciptakan engagement yang tinggi.</p>
                            
                            <strong className="font-semibold text-black">Bagaimana ini mempengaruhi bisnis?</strong>
                            <p>Bisnis harus memprioritaskan pembuatan video pendek yang informatif dan menarik, seperti tutorial cepat atau promosi produk yang engaging.</p>
                        </li>

                        <li>
                            <strong className="text-[20px] font-semibold text-black">Komunitas Online Semakin Meningkat:</strong>
                            <p className="pb-[20px]">Media sosial semakin fokus pada membangun komunitas online yang solid, bukan hanya soal like atau share.</p>
                            
                            <strong className="font-semibold text-black">Bagaimana ini mempengaruhi bisnis?</strong>
                            <p>Bisnis harus menciptakan komunitas di sekitar produk atau layanan mereka, dengan menginisiasi percakapan relevan dan membangun loyalitas pelanggan.</p>
                        </li>

                        <li>
                            <strong className="text-[20px] font-semibold text-black">Audio-Based Content Tetap Populer:</strong>
                            <p className="pb-[20px]">Konten berbasis audio seperti podcast dan live audio chat akan terus meningkat popularitasnya.</p>
                            
                            <strong className=" font-semibold text-black">Bagaimana ini mempengaruhi bisnis?</strong>
                            <p>Bisnis dapat membuat konten audio seperti podcast atau sesi live audio untuk menjangkau audiens dengan cara yang lebih santai dan mendalam.</p>
                        </li>

                        <li>
                            <strong className="text-[20px] font-semibold text-black">Fokus pada Keberlanjutan dan Dampak Sosial:</strong>
                            <p className="pb-[20px]">Semakin banyak konsumen yang peduli pada isu-isu sosial dan lingkungan, terutama dalam hal keberlanjutan, etika bisnis, dan tanggung jawab sosial.</p>
                            
                            <strong className=" font-semibold text-black">Bagaimana ini mempengaruhi bisnis?</strong>
                            <p>Brand perlu mengomunikasikan inisiatif keberlanjutan dan dampak sosial mereka di media sosial untuk menarik konsumen yang peduli pada isu-isu ini.</p>
                        </li>
                    </ol>

                    <h3 className="text-black text-[20px] font-semibold mt-6">Kesimpulan</h3>
                    <p className="text-black">
                        Tahun 2025 akan membawa tren media sosial yang lebih mengutamakan kejujuran, keterlibatan komunitas, dan pengalaman belanja yang seamless. Bisnis harus menyesuaikan strategi mereka dengan preferensi baru konsumen untuk tetap relevan di dunia media sosial yang terus berkembang.
                    </p>


                </div>
                <button
                    onClick={scrollToTop}
                    className="mt-[30px] bg-[#5569B2] text-white w-8 h-8 rounded-full shadow-lg hover:bg-[#7f93d8] duration-300 focus:outline-none self-end"
                >
                    &#x2191; {/* Unicode for a simple up arrow */}
                </button>
            </div>
        </div>
        
    )
}