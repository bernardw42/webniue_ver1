/* eslint-disable react/no-unescaped-entities */
"use client"

import Link from "next/link";

export default function Text() {
    // Function to scroll the page to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="flex flex-col bg-white w-full h-full justify-center items-center px-[8%] pb-[50px] max-sm:pb-0">
            <div className="max-w-7xl flex flex-col pt-[15px]">
                <p className="text-gray-500 text-[12px]">15 November 2024 | Nieu</p>
                <div className="text-justify flex flex-col mt-[30px] gap-y-[20px]">
                    <p className="text-black">
                        Dalam dunia digital marketing, istilah <em><em>hook</em></em> kerap digunakan, terutama saat membahas pembuatan konten. <em><em>hook</em></em> adalah elemen penting yang berfungsi untuk menarik perhatian audiens secara cepat. Dengan waktu yang terbatas untuk menarik minat pengguna di tengah lautan konten digital, <em><em>hook</em></em> berperan sebagai pengait utama yang membuat audiens tertarik dan melanjutkan konsumsi konten Anda.
                    </p>
                    <h1 className="text-black text-[20px] font-semibold">Pentingnya hook dalam Konten</h1>
                    <p className="text-black">
                        Di era digital saat ini, pengguna media sosial dan platform digital lainnya sangat cepat dalam menyaring informasi. Mereka cenderung hanya menghabiskan beberapa detik untuk menentukan apakah konten yang mereka lihat layak untuk diperhatikan lebih lanjut atau tidak. <em><em>hook</em></em> yang kuat diperlukan untuk menangkap perhatian mereka dalam waktu singkat. Jika konten Anda gagal menarik perhatian dalam 3-5 detik pertama, kemungkinan besar audiens akan berpindah ke konten lain.
                    </p>
                    <p className="text-black">
                        <em><em>hook</em></em> yang efektif tidak hanya berfungsi untuk menarik perhatian, tetapi juga dapat meningkatkan engagement dan memperpanjang waktu yang dihabiskan audiens pada konten Anda, yang pada akhirnya dapat berdampak pada peningkatan SEO (Search Engine Optimization), brand awareness, dan conversion rate.
                    </p>
                    <h1 className="text-black text-[20px] font-semibold">Bentuk hook yang Efektif</h1>
                    <ol className="text-black list-decimal pl-8 space-y-4">
                        <li>
                            <strong>Judul yang Menarik: </strong>
                            Judul adalah aspek pertama yang dilihat audiens, baik dalam konten blog, video, maupun media sosial. Judul yang menarik dan memancing rasa ingin tahu memiliki potensi besar untuk menghentikan proses scrolling audiens.<br />
                            Contoh: “Rahasia Sukses Bisnis Online yang Tidak Banyak Diketahui Orang.”<br />
                        </li>
                        <li>
                            <strong>Pertanyaan Provokatif: </strong>
                            Pertanyaan adalah cara ampuh untuk membuat audiens terlibat. Pertanyaan yang menantang atau membuat audiens berpikir akan menarik mereka untuk menemukan jawabannya melalui konten Anda.<br />
                            Contoh: “Apakah Bisnis Anda Siap Menghadapi Era Digital?”<br />
                        </li>
                        <li>
                            <strong>Fakta atau Statistik Mengejutkan: </strong>
                            Menggunakan data statistik yang relevan dapat memberikan nilai tambah pada konten, serta meningkatkan kepercayaan audiens terhadap informasi yang Anda berikan.<br />
                            Contoh: “80% Konsumen Lebih Memilih Bisnis dengan Kehadiran Digital yang Kuat.”<br />
                        </li>
                        <li>
                            <strong>Cerita Personal atau Kisah Inspiratif: </strong>
                            Audiens sering kali merasa lebih terhubung dengan konten yang memuat cerita personal atau kisah inspiratif. Hal ini memberikan elemen emosional yang membuat mereka merasa bahwa konten tersebut relevan dengan situasi mereka.<br />
                            Contoh: “Bagaimana Saya Mengubah Kegagalan Bisnis Menjadi Sukses Dalam Waktu 6 Bulan.”<br />
                        </li>
                        <li>
                            <strong>Visual yang Memikat: </strong>
                            Visual yang menarik, seperti gambar yang mencolok atau video dengan thumbnail yang eye-catching, dapat menjadi <em><em>hook</em></em> yang efektif. Visual ini berfungsi sebagai daya tarik awal yang membuat audiens berhenti sejenak dan tertarik untuk mengeksplorasi konten lebih lanjut.<br />
                        </li>
                    </ol>
                    <h1 className="text-black text-[20px] font-semibold">Menggunakan hook di Berbagai Jenis Konten</h1>
                    <ol className="text-black list-decimal pl-8 space-y-4">
                        <li>
                            <strong>Post Media Sosial: </strong>
                            Di platform seperti Instagram atau Facebook, <em>hook</em> bisa berupa caption yang langsung menyentuh rasa penasaran audiens, misalnya dengan pertanyaan atau pernyataan yang mengundang keterlibatan.<br />
                            Contoh: “Tahukah Anda? Hanya dengan 5 Langkah Ini, Anda Bisa Meningkatkan Penjualan Bisnis Online Hingga 50%.”<br />
                        </li>
                        <li>
                            <strong>Video YouTube: </strong>
                            Pada video, gunakan <em>hook</em> di awal dengan cuplikan menarik yang langsung menggambarkan manfaat atau inti dari video tersebut. Hindari intro yang terlalu panjang, karena dapat membuat audiens bosan.<br />
                            Contoh: "Dalam video ini, Anda akan belajar cara meningkatkan trafik website dengan teknik SEO yang jarang diketahui."<br />
                        </li>
                        <li>
                            <strong>Artikel Blog: </strong>
                            Pada blog atau artikel, <em>hook</em> berada pada paragraf pembuka. Gunakan kalimat yang langsung menarik perhatian pembaca, bisa dengan data statistik, kutipan, atau pertanyaan.<br />
                            Contoh: “Apakah bisnis Anda sudah memiliki strategi digital yang efektif? Jika belum, ini saatnya untuk berubah!”<br />
                        </li>
                        <li>
                            <strong>Email Marketing: </strong>
                            Dalam email marketing, <em>hook</em> bisa terletak pada subjek email yang menarik. Subjek yang menggugah rasa penasaran akan meningkatkan kemungkinan email tersebut dibuka dan dibaca.<br />
                            Contoh: “Strategi Rahasia untuk Melipatgandakan Penjualan Anda dalam 30 Hari.”<br />
                        </li>
                    </ol>
                    <h1 className="text-black text-[20px] font-semibold">Contoh hook yang Sukses</h1>
                    <ul className="text-black list-disc pl-8 space-y-4">
                        <li>Post Instagram: “Ternyata kebiasaan kecil ini bisa merusak strategi pemasaran Anda secara diam-diam!”</li>
                        <li>Video YouTube: “Bagaimana bisnis kecil ini mampu bertahan di tengah resesi global?”</li>
                        <li>Artikel Blog: “5 Kesalahan Fatal yang Sering Dilakukan Bisnis Pemula dalam Digital Marketing.”</li>
                    </ul>
                    <h2 className="text-black text-[20px] font-semibold">Kesimpulan</h2>
                    <p className="text-black">
                        Membuat <em><em>hook</em></em> yang efektif merupakan langkah awal yang penting dalam membangun  <strong>engagement </strong> yang kuat dengan audiens Anda. Dengan menghadirkan <em>hook</em> yang tepat, Anda tidak hanya mampu menarik perhatian audiens, tetapi juga memperkuat<strong> SEO</strong>, meningkatkan <strong>waktu tayang</strong>, serta mendorong audiens untuk melakukan tindakan lebih lanjut, seperti berinteraksi atau melakukan konversi.
                    </p>
                    <p className="text-black">
                        Untuk memudahkan Anda dalam membuat <em>hook</em> yang efektif, kami telah menyediakan template khusus yang bisa Anda gunakan. Template ini dirancang untuk membantu Anda menyusun <em>hook</em> yang menarik di berbagai jenis konten, mulai dari media sosial, artikel blog, hingga email marketing. Dengan template ini, Anda bisa dengan cepat membuat <em>hook</em> yang sesuai dengan target audiens Anda dan meningkatkan efektivitas konten Anda secara keseluruhan.
                    </p>
                    <p className="text-black">
                        <Link href="/blog/handbook/Hook Template.xlsx" download className="font-bold text-black hover:text-[#5569B2]">Download template hook ini sekarang</Link> dan mulai tingkatkan engagement serta performa konten Anda dengan lebih mudah!<br />
                    </p>
                    <p className="text-black">
                        Pastikan setiap konten yang Anda buat memiliki <em>hook</em> yang relevan dan kuat untuk memaksimalkan efektivitas strategi digital marketing Anda.
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
