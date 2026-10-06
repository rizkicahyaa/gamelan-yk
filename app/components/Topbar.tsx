export default function Topbar() {
    return (
        <div className="topbar py-2">
            <div className="container d-flex flex-wrap justify-content-between gap-2">
                <span>
                    <i className="bi bi-controller me-1"></i>Halo! Selamat datang di GameLan
                </span>
                <span>
                    <a href="https://www.instagram.com/gamelan.yk/">
                        <i className="bi bi-instagram me-1"></i>@gamelan.yk
                    </a>
                    &nbsp;{" "}
                    <a href="mailto:halo@gamelan.yk">
                        <i className="bi bi-envelope me-1"></i>halo@gamelan.yk
                    </a>
                </span>
            </div>
        </div>
    );
}
