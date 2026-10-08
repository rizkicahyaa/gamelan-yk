const blogPosts = [
    {
        icon: "bi-trophy",
        title: "Rekap Game Jam Jogja 2025",
        date: "Contoh tanggal",
        author: "Admin",
        excerpt: "Ringkasan hari pertama dan hasil karya peserta.",
        href: "#",
    },
    {
        icon: "bi-building",
        title: "Fasilitas Jogja Creative Hub untuk kegiatanmu",
        date: "Contoh tanggal",
        author: "Admin",
        excerpt: "Ruang yang bisa dipakai komunitas untuk berkegiatan.",
        href: "#",
    },
];

export default function BlogSection() {
    return (
        <section className="section" id="blog">
            <div className="container">
                <div className="section-title">
                    <h2>Kabar terbaru</h2>
                    <p className="mt-3">Cerita dari event dan komunitas</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="blog-img">
                            <i className="bi bi-play-circle-fill"></i>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {blogPosts.map((post) => (
                            <div className="blog-item" key={post.title}>
                                <div className="mini">
                                    <i className={`bi ${post.icon}`}></i>
                                </div>
                                <div>
                                    <h5>{post.title}</h5>
                                    <small className="text-muted">
                                        {post.date} &middot; oleh {post.author}
                                    </small>
                                    <p className="mb-1 small">{post.excerpt}</p>
                                    <a href={post.href} className="fw-bold small text-dark text-decoration-underline">
                                        Baca selengkapnya
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
