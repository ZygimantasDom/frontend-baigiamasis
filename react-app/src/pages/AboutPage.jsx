import React from "react";
import "../scss/aboutPage.scss";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Apie mus</h1>
      <p>
        Maecenas sit amet gravida justo. Etiam sit amet tempus nunc. In nec orci
        id sem hendrerit auctor iaculis maximus est. Sed turpis risus,
        ullamcorper vitae leo ac, accumsan venenatis neque. Fusce convallis
        lorem magna, sit amet aliquam ante aliquam sit amet.
      </p>

      <div className="about-gallery">
        <img src={foto1} alt="Masažo kambarys" className="about-image" />
        <img src={foto2} alt="Specialistų komanda" className="about-image" />
      </div>

      <div className="about-info">
        <div className="about-card">
          <h2>Apie mus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus interdum tortor id imperdiet. Nulla feugiat nunc arcu, vitae
            ullamcorper sem sodales a. Phasellus tincidunt et ante tristique
            mollis. Vivamus diam mauris.
          </p>
        </div>
        <div className="about-card">
          <h2>Mūsų misija</h2>
          <p>
            Maecenas sagittis, sapien quis sagittis semper, tortor ligula
            egestas enim, vitae eleifend tellus est vel nulla. Mauris velit
            nibh, congue quis nisi in, tincidunt maximus justo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
