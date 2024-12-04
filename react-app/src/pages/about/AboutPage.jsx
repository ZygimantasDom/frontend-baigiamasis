import React from "react";
import "../../scss/aboutPage.scss";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foro4.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>Lorem ipsum</h1>
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
          <h2>Ut laoreet finibus</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus interdum tortor id imperdiet. Nulla feugiat nunc arcu, vitae
            ullamcorper sem sodales a. Phasellus tincidunt et ante tristique
            mollis. Vivamus diam mauris.
          </p>
        </div>
        <div className="about-card">
          <h2>Curabitur vulputate</h2>
          <p>
            Maecenas sagittis, sapien quis sagittis semper, tortor ligula
            egestas enim, vitae eleifend tellus est vel nulla. Mauris velit
            nibh, congue quis nisi in, tincidunt maximus justo.
          </p>
        </div>
      </div>

      <div className="about-gallery">
        <img src={foto3} alt="Masažo kambarys" className="about-image" />
        <img src={foto4} alt="Specialistų komanda" className="about-image" />
      </div>

      <div className="about-info">
        <div className="about-card">
          <h2>Vestibulum purus </h2>
          <p>
            Aliquam erat volutpat. Maecenas sed elit lectus. Sed aliquam leo
            purus, vitae mattis risus consectetur sit amet.
          </p>
        </div>
        <div className="about-card">
          <h2>Mauris rhoncus</h2>
          <p>
            Nunc id mattis leo. Nam massa nunc, hendrerit ut augue ut, maximus
            tristique purus. Nam blandit purus ut ornare egestas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
