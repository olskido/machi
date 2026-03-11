import React, { useState } from 'react';
import './ProfilePictures.css';

const pfps = [
    { id: 1, src: '/profilePicture/photo_2026-03-11_17-34-07.jpg' },
    { id: 2, src: '/profilePicture/photo_2026-03-11_17-34-10.jpg' },
    { id: 3, src: '/profilePicture/unnamed (1) (copy).jpg' },
    { id: 4, src: '/profilePicture/unnamed (1).jpg' },
    { id: 5, src: '/profilePicture/unnamed (10) (copy).jpg' },
    { id: 6, src: '/profilePicture/unnamed (10).jpg' },
    { id: 7, src: '/profilePicture/unnamed (11) (copy).jpg' },
    { id: 8, src: '/profilePicture/unnamed (11).jpg' },
    { id: 9, src: '/profilePicture/unnamed (12) (copy).jpg' },
    { id: 10, src: '/profilePicture/unnamed (12).jpg' },
    { id: 11, src: '/profilePicture/unnamed (13) (copy).jpg' },
    { id: 12, src: '/profilePicture/unnamed (13).jpg' },
    { id: 13, src: '/profilePicture/unnamed (14) (copy).jpg' },
    { id: 14, src: '/profilePicture/unnamed (14).jpg' },
    { id: 15, src: '/profilePicture/unnamed (15) (copy).jpg' },
    { id: 16, src: '/profilePicture/unnamed (15).jpg' },
    { id: 17, src: '/profilePicture/unnamed (16) (copy).jpg' },
    { id: 18, src: '/profilePicture/unnamed (16).jpg' },
    { id: 19, src: '/profilePicture/unnamed (17) (copy).jpg' },
    { id: 20, src: '/profilePicture/unnamed (17).jpg' },
    { id: 21, src: '/profilePicture/unnamed (18).jpg' },
    { id: 22, src: '/profilePicture/unnamed (19).jpg' },
    { id: 23, src: '/profilePicture/unnamed (2) (copy).jpg' },
    { id: 24, src: '/profilePicture/unnamed (2).jpg' },
    { id: 25, src: '/profilePicture/unnamed (3) (copy).jpg' },
    { id: 26, src: '/profilePicture/unnamed (3).jpg' },
    { id: 27, src: '/profilePicture/unnamed (4) (copy).jpg' },
    { id: 28, src: '/profilePicture/unnamed (4).jpg' },
    { id: 29, src: '/profilePicture/unnamed (5) (copy).jpg' },
    { id: 30, src: '/profilePicture/unnamed (5).jpg' },
    { id: 31, src: '/profilePicture/unnamed (6) (copy).jpg' },
    { id: 32, src: '/profilePicture/unnamed (6).jpg' },
    { id: 33, src: '/profilePicture/unnamed (7) (copy).jpg' },
    { id: 34, src: '/profilePicture/unnamed (7).jpg' },
    { id: 35, src: '/profilePicture/unnamed (8) (copy).jpg' },
    { id: 36, src: '/profilePicture/unnamed (8).jpg' },
    { id: 37, src: '/profilePicture/unnamed (9) (copy).jpg' },
    { id: 38, src: '/profilePicture/unnamed (9).jpg' },
    { id: 39, src: '/profilePicture/unnamed (copy).jpg' },
    { id: 40, src: '/profilePicture/unnamed.jpg' }
];

export default function ProfilePictures({ setCurrentPage }) {
    const [selectedPfp, setSelectedPfp] = useState(null);

    const handleDownload = async (src, filename) => {
        try {
            const response = await fetch(src);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error downloading image: ", error);
            // Fallback
            const link = document.createElement('a');
            link.href = src;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const shareToTwitter = (src) => {
        const text = "%24MACHI AI Image Generator profile pictures are live. Grab yours now at machi.com";
        const url = "https://twitter.com/intent/tweet?text=" + text;
        window.open(url, '_blank');
    };

    return (
        <>
            <section className="profile-pics" id="profile-pictures">
                <div className="profile-pics-inner">
                    <button
                        className="btn-back-home"
                        onClick={() => {
                            setCurrentPage('home');
                            window.scrollTo(0, 0);
                        }}
                    >
                        &larr; Back to Home
                    </button>
                    <div className="profile-pics-header reveal" style={{ marginTop: '2rem' }}>
                        <h2 className="profile-pics-title">
                            <span className="gold-text">$MACHI</span><br />
                            Profile Pictures
                        </h2>
                        <p className="profile-pics-desc">
                            Download your ultimate Machi AI identity. Click on an image to view it in full resolution.
                        </p>
                    </div>

                    <div className="pfp-grid reveal">
                        {pfps.map((pfp) => (
                            <div
                                key={pfp.id}
                                className="pfp-card"
                                onClick={() => setSelectedPfp(pfp)}
                            >
                                <div className="pfp-img-wrapper">
                                    <img src={pfp.src} alt={`MACHI AI PFP ${pfp.id}`} className="pfp-img" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Modal / Lightbox */}
            {selectedPfp && (
                <div className="pfp-modal" onClick={() => setSelectedPfp(null)}>
                    <div className="pfp-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="btn-close-modal" onClick={() => setSelectedPfp(null)}>
                            ×
                        </button>
                        <img src={selectedPfp.src} alt={`MACHI AI PFP ${selectedPfp.id}`} className="pfp-modal-img" />
                        <div className="pfp-modal-actions">
                            <button
                                className="btn-download"
                                onClick={() => handleDownload(selectedPfp.src, `MACHI-PFP-${selectedPfp.id}.jpg`)}
                            >
                                Download HQ PNG
                            </button>
                            <button
                                className="btn-twitter"
                                onClick={() => shareToTwitter(selectedPfp.src)}
                            >
                                Share to X
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
