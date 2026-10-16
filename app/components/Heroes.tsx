import Link from "next/link";

export default function Heroes() {
    return (
        <header className="hero" id="beranda">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-7">
                        <h1>
                            Seru-Seruan Bareng Komunitas Game Dev di <span>Jogja</span>
                        </h1>
                        <p className="lead my-4">GameLan adalah komunitas game developer Yogyakarta. Tempat programmer, artis, desainer, dan musisi saling belajar, berbagi, dan merilis game bersama.</p>
                        <div className="d-flex flex-wrap gap-3">
                            <Link href="#gabung" className="btn btn-gl btn-lg px-4">
                                Gabung sekarang
                            </Link>
                            <Link href="#program" className="btn btn-outline-light btn-lg px-4">
                                Lihat program
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        {/* <div className="pac-wrap">
                            <div className="pac"></div>
                            <div className="dots">
                                <i></i>
                                <i></i>
                                <i></i>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </header>
    );
}
