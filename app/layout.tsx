import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "GameLan.yk | Jogja Game Developer Community",
    description: "GameLan adalah komunitas game developer Yogyakarta. Tempat programmer, artis, desainer, dan musisi saling belajar, berbagi, dan merilis game bersama.",
    keywords: ["game developer", "Jogja", "Yogyakarta", "komunitas", "game jam", "GameLan"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" />
            </head>
            <body>
                {children}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async />
            </body>
        </html>
    );
}
