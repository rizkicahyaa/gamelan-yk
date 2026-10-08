export default function TestimonialSection() {
    return (
        <section className="testi">
            <div className="container">
                <div className="row align-items-center g-4">
                    <div className="col-lg-7">
                        <h2 className="mb-4">Kata mereka tentang GameLan</h2>
                        <blockquote>Di sini aku pertama kali menyelesaikan satu game utuh. Teman-temannya saling bantu, dan itu yang bikin semangat terus.</blockquote>
                        <p className="mt-3 fw-bold mb-0">
                            Nama Peserta <span className="fw-normal">- Peserta Game Jam (contoh)</span>
                        </p>
                    </div>
                    <div className="col-lg-5 text-center">
                        <i className="bi bi-quote" style={{ fontSize: "9rem", color: "var(--yellow)" }}></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
