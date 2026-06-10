import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">

      {/* LEFT SIDEBAR */}
      <aside className="auth-sidebar">
        <div className="brand-header">
          <div className="brand-logo">🚀</div>
          <span>Kelajak Kasblari</span>
        </div>

        <div className="sidebar-content">
          <h1 className="sidebar-title">
            Kelajagingni bugundan boshlagin
          </h1>

          <p className="sidebar-description">
            IT va zamonaviy kasblarni o‘rganing, real loyihalarda ishlang.
          </p>

          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <CheckCircle2 size={16} /> Bepul darslar
            </li>
            <li className="sidebar-list-item">
              <CheckCircle2 size={16} /> Amaliy mashg‘ulotlar
            </li>
            <li className="sidebar-list-item">
              <CheckCircle2 size={16} /> Sertifikat
            </li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <span>© 2026 Kelajak Kasblari</span>
        </div>
      </aside>

      {/* RIGHT SIDE */}
      <main className="auth-main">
        <div className="form-wrapper">

          <h2 className="form-title">Kirish</h2>
          <p className="form-subtitle">
            Hisobingizga kirib davom eting
          </p>

          <form className="auth-form">

            <div className="input-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail className="input-icon left" />
                <input
                  type="email"
                  className="input-field has-left-icon"
                  placeholder="email@gmail.com"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Parol</label>
              <div className="input-wrapper">
                <Lock className="input-icon left" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="input-field has-left-icon has-right-icon"
                  placeholder="Parol"
                />

                {showPassword ? (
                  <EyeOff
                    className="input-icon right"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    className="input-icon right"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            <button type="submit" className="btn-primary">
              Kirish <ArrowRight size={16} />
            </button>

          </form>

          <p className="auth-footer">
            Hisob yo‘qmi? <Link to="/register">Ro‘yxatdan o‘tish</Link>
          </p>

        </div>
      </main>

    </div>
  );
};

export default Login;