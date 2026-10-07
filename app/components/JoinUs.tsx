import Link from "next/link";

const roles = [
    { icon: "bi-code-slash", label: "Jadi programmer game" },
    { icon: "bi-palette-fill", label: "Jadi artis & desainer" },
    { icon: "bi-music-note-beamed", label: "Jadi musisi & sound designer" },
    { icon: "bi-people-fill", label: "Jadi relawan event" },
    { icon: "bi-chat-dots-fill", label: "Ngobrol di Discord komunitas" },
];

export default function JoinUs() {
    return (
        <section className="section" id="gabung">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <h2 className="mb-3">Cara bergabung di GameLan</h2>
                        <p>Kamu tidak perlu sudah jago. Cukup mau belajar dan berkarya. Pilih peran yang cocok denganmu.</p>
                        <a href="https://linktr.ee/GameLanJogja" className="btn btn-gl px-4 py-2 mt-2" target="_blank" rel="noopener noreferrer">
                            Buka Linktree kami
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-unstyled help-list m-0">
                            {roles.map((role) => (
                                <li key={role.label}>
                                    <i className={`bi ${role.icon}`}></i>
                                    {role.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
