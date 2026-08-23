import React, { useEffect } from "react";
import "../Styles/RellsInstagram.css";


const ReelsSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="quem-somos" className="reels-section">
      <h2>📹 REELS DO INSTAGRAM</h2>
      <div className="Rells">
        {[
          "https://www.instagram.com/p/DcYVQJAR_m-/",
          "https://www.instagram.com/p/DcH_hvQzC12/",
        ].map((url, index) => (
          <blockquote
            key={index}
            className="instagram-media reel"
            data-instgrm-permalink={url}
            data-instgrm-version="14"
          ></blockquote>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;
