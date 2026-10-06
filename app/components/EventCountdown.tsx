"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const EVENT_TARGET = new Date("2026-12-12T09:00:00+07:00");

export default function EventCountdown() {
    const dRef = useRef<HTMLSpanElement>(null);
    const hRef = useRef<HTMLSpanElement>(null);
    const mRef = useRef<HTMLSpanElement>(null);
    const sRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const pad = (n: number) => String(n).padStart(2, "0");

        const tick = () => {
            const t = Math.max(0, EVENT_TARGET.getTime() - Date.now());
            if (dRef.current) dRef.current.textContent = pad(Math.floor(t / 864e5));
            if (hRef.current) hRef.current.textContent = pad(Math.floor(t / 36e5) % 24);
            if (mRef.current) mRef.current.textContent = pad(Math.floor(t / 6e4) % 60);
            if (sRef.current) sRef.current.textContent = pad(Math.floor(t / 1e3) % 60);
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container float-wrap" id="event">
            <div className="row g-4">
                <div className="col-lg-7">
                    <div className="panel h-100">
                        <div className="row align-items-center g-3">
                            <div className="col-sm-4">
                                <div className="blog-img" style={{ minHeight: "130px", fontSize: "3rem" }}>
                                    <i className="bi bi-joystick"></i>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <small className="fw-bold text-dark">Event berikutnya</small>
                                <h4 className="fs-5 my-1">Game Jam Jogja 2026</h4>
                                <p className="small mb-2">
                                    <i className="bi bi-calendar-event me-1"></i>12 Des 2026 &nbsp;
                                    <i className="bi bi-geo-alt me-1"></i>Yogyakarta (tanggal &amp; lokasi contoh)
                                </p>
                                <div className="count d-flex gap-2" id="count">
                                    <div>
                                        <span ref={dRef}>00</span>
                                        <small>HARI</small>
                                    </div>
                                    <div>
                                        <span ref={hRef}>00</span>
                                        <small>JAM</small>
                                    </div>
                                    <div>
                                        <span ref={mRef}>00</span>
                                        <small>MENIT</small>
                                    </div>
                                    <div>
                                        <span ref={sRef}>00</span>
                                        <small>DETIK</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="panel h-100 text-center">
                        <h3 className="fs-4">Ikut event kami</h3>
                        <p className="small">Daftarkan tim kamu atau datang sebagai peserta. Pemula sangat diterima.</p>
                        <Link href="#gabung" className="btn btn-gl btn-red w-100 py-2">
                            Daftar event
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
