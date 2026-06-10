import { Link } from "react-router-dom";
import laptop from "../assets/laptop.png";
import "../home.css";

function Home() {
  return (
    <>
      <header className="home-header">
        <div className="home-logo">Kelajak Kasblari</div>

        <nav className="home-nav">
          <a href="#">Bosh Sahifa</a>
          <a href="#">Darslar</a>
          <a href="#">Kurslar</a>
          <a href="#">Blog</a>
          <a href="#">Aloqa</a>
        </nav>

        <div className="home-auth">
          <Link to="/login">
            <button className="home-login-btn">Kirish</button>
          </Link>

          <Link to="/register">
            <button className="home-signup-btn">Ro'yxatdan o'tish</button>
          </Link>
        </div>
      </header>

      <section className="home-hero">
        <div className="home-hero-text">
          <h1>Kelajagingizni biz bilan yarating!</h1>

          <p>
            HTML, CSS, JavaScript va boshqa zamonaviy texnologiyalarni oson va
            tushunarli tarzda o‘rganing.
          </p>

          <div className="hero-buttons">
            <a href="#courses" className="btn btn-primary">
              🚀 Boshlash
            </a>

            <a href="#courses" className="btn btn-secondary">
              ▶ Bepul Darslar
            </a>
          </div>
        </div>

        <div className="home-hero-img">
          <img src={laptop} alt="Laptop" />
        </div>
      </section>
      <section className="courses" id="courses">
        <h2>Mashhur Darslar</h2>

        <div className="grid">
          <div className="card html">
            <h3>HTML</h3>
            <p>Veb sahifalarning tuzilishini o‘rganing</p>
            <span>Boshlang‘ich • 24 dars</span>
          </div>

          <div className="card css">
            <h3>CSS</h3>
            <p>Zamonaviy dizayn va stillarni yarating</p>
            <span>Boshlang‘ich • 20 dars</span>
          </div>

          <div className="card js">
            <h3>JavaScript</h3>
            <p>Interaktiv va dinamik sahifalar</p>
            <span>O‘rta • 30 dars</span>
          </div>

          <div className="card bootstrap">
            <h3>Bootstrap</h3>
            <p>Tez va moslashuvchan dizayn</p>
            <span>O‘rta • 18 dars</span>
          </div>

          <div className="card node">
            <h3>Node.js</h3>
            <p>Server tomon JavaScript</p>
            <span>O‘rta • 22 dars</span>
          </div>

          <div className="card react">
            <h3>React</h3>
            <p>Zamonaviy Frontend kutubxonasi</p>
            <span>Yuqori • 28 dars</span>
          </div>

          <div className="card sql">
            <h3>SQL</h3>
            <p>Ma'lumotlar bazasi bilan ishlash</p>
            <span>Boshlang‘ich • 16 dars</span>
          </div>

          <div className="card git">
            <h3>Git & GitHub</h3>
            <p>Loyiha boshqaruvi va versiya nazorati</p>
            <span>Boshlang‘ich • 14 dars</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
