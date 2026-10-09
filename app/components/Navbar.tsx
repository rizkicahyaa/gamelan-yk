"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [navOffsetTop, setNavOffsetTop] = useState(0);

    useEffect(() => {
        if (navRef.current) {
            setNavOffsetTop(navRef.current.offsetTop);
        }

        const handleScroll = () => {
            if (navRef.current) {
                setIsSticky(window.scrollY >= navOffsetTop);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navOffsetTop]);

    return (
        <>
            <div className="container py-3 d-flex justify-content-between align-items-center">
                <Link className="brand d-flex align-items-center" href="#beranda">
                    <Image src="/logo-2.png" alt="Logo GameLan - Jogja Game Developer Community" width={120} height={62} style={{ height: "62px", width: "auto" }} />
                </Link>
                <Link href="#gabung" className="btn btn-gl px-4 py-2 d-none d-sm-inline-block">
                    <i className="bi bi-person-plus-fill me-2"></i>Gabung Komunitas
                </Link>
            </div>

            {isSticky && <div style={{ height: navRef.current?.offsetHeight ?? 0 }} />}

            <nav ref={navRef} className={`menu navbar navbar-expand-lg shadow p-0${isSticky ? " navbar-sticky" : ""}`} style={isSticky ? { position: "fixed", top: 0, left: 0, right: 0, zIndex: 1030 } : {}}>
                <div className="container">
                    <button className="navbar-toggler border-dark my-2" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list text-dark fs-3"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-2">
                                <Link className="nav-link active" href="#beranda">
                                    Beranda
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" href="#event">
                                    Event
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" href="#program">
                                    Program
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" href="#blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link" href="#gabung">
                                    Gabung
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
