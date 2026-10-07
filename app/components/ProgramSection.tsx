import Link from "next/link";

const programs = [
    {
        icon: "bi-lightning-charge-fill",
        title: "Game Jam",
        desc: "Bikin game dalam hitungan hari. Kami ikut Global Game Jam setiap tahun di Jogja.",
        progress: 85,
        label: "Dipakai di tiap edisi",
    },
    {
        icon: "bi-mortarboard-fill",
        title: "Workshop & Meetup",
        desc: "Belajar Unity, Godot, pixel art, desain level, dan musik game dari praktisi lokal.",
        progress: 65,
        label: "Setiap bulan",
    },
    {
        icon: "bi-dice-5-fill",
        title: "Showcase & Boardgame",
        desc: "Pamerkan karyamu dan main bareng, termasuk acara boardgame seperti Jogja Spiel.",
        progress: 50,
        label: "Berkala",
    },
];

export default function ProgramSection() {
    return (
        <section className="section bg-soft mt-5" id="program">
            <div className="container">
                <div className="section-title">
                    <h2>Program komunitas</h2>
                    <p className="mt-3">Yang rutin kami kerjakan bersama</p>
                </div>
                <div className="row g-4">
                    {programs.map((program) => (
                        <div className="col-md-4" key={program.title}>
                            <div className="card-gl">
                                <div className="thumb">
                                    <i className={`bi ${program.icon}`}></i>
                                </div>
                                <div className="body">
                                    <h4 className="fs-5">{program.title}</h4>
                                    <p>{program.desc}</p>
                                    <div className="progress mb-2">
                                        <div className="progress-bar" style={{ width: `${program.progress}%` }}></div>
                                    </div>
                                    <small>{program.label}</small>
                                    <div className="mt-3">
                                        <Link href="#" className="btn btn-gl btn-sm px-3">
                                            Selengkapnya
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
