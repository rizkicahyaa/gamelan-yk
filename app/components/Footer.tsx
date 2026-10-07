import Image from "next/image";

export default function Footer() {
    return (
        <footer id="kontak">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <Image
                            src="/logo-2.png"
                            alt="GameLan"
                            width={140}
                            height={70}
                            style={{
                                height: "80px",
                                width: "auto",
                                padding: "4px",
                            }}
                            className="mb-3"
                        />
                        <p>Komunitas Game Developer Jogja. Belajar, berkarya, dan merilis game bersama.</p>
                        <div className="social">
                            <a href="https://www.instagram.com/gamelan.yk/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://linktr.ee/GameLanJogja" aria-label="Linktree" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-link-45deg"></i>
                            </a>
                            <a href="#" aria-label="Discord">
                                <i className="bi bi-discord"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-6 col-lg-2">
                        <h5>Tautan</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#program">Program</a>
                            </li>
                            <li>
                                <a href="#event">Event</a>
                            </li>
                            <li>
                                <a href="#member">Anggota</a>
                            </li>
                            <li>
                                <a href="#blog">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-lg-3">
                        <h5>Kontak</h5>
                        <p className="mb-1">
                            <i className="bi bi-geo-alt me-1"></i>Yogyakarta, Indonesia
                        </p>
                        <p className="mb-1">
                            <i className="bi bi-envelope me-1"></i>halo@gamelan.yk
                        </p>
                        <p>
                            <i className="bi bi-instagram me-1"></i>@gamelan.yk
                        </p>
                    </div>

                    <div className="col-lg-3">
                        <h5>Dapat kabar event</h5>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Email kamu" aria-label="Email newsletter" />
                            <button className="btn btn-gl" type="button">
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border-secondary mt-4" />
                <p className="text-center small mb-0">&copy; 2026 GameLan.yk. All rights reserved.</p>
            </div>
        </footer>
    );
}
