import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  CheckCircle2,
} from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-container">
      {/* LEFT SIDEBAR */}
      <aside className="auth-sidebar">
        <div className="brand-header">
          <div className="brand-logo">🚀</div>
          <span>Kelajak Kasblari</span>
        </div>

        <div className="sidebar-content">
          <h1 className="sidebar-title">Bizga qo‘shiling va o‘rganing</h1>

          <p className="sidebar-description">
            IT kasblarini o‘rganib, o‘z kelajagingizni yarating.
          </p>

          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <CheckCircle2 size={16} /> Bepul 1-dars
            </li>
            <li className="sidebar-list-item">
              <CheckCircle2 size={16} /> Mentor yordami
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
          <h2 className="form-title">Ro‘yxatdan o‘tish</h2>
          <p className="form-subtitle">Yangi hisob yarating</p>

          <form className="auth-form">
            <div className="input-group">
              <label>Ism</label>
              <div className="input-wrapper">
                <User className="input-icon left" />
                <input className="input-field has-left-icon" type="text" />
              </div>
            </div>

            <div className="input-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail className="input-icon left" />
                <input className="input-field has-left-icon" type="email" />
              </div>
            </div>

            <div className="input-group">
              <label>Parol</label>
              <div className="input-wrapper">
                <Lock className="input-icon left" />
                <input
                  className="input-field has-left-icon has-right-icon"
                  type={showPassword ? "text" : "password"}
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

            <div className="input-group">
              <label>Parolni tasdiqlash</label>
              <div className="input-wrapper">
                <Lock className="input-icon left" />
                <input
                  className="input-field has-left-icon has-right-icon"
                  type={showConfirmPassword ? "text" : "password"}
                />

                {showConfirmPassword ? (
                  <EyeOff
                    className="input-icon right"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <Eye
                    className="input-icon right"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </div>
            </div>

            <button type="submit" className="btn-primary">
              Ro‘yxatdan o‘tish <ArrowRight size={16} />
            </button>
          </form>

          <p className="auth-footer">
            Hisob bormi? <Link to="/login">Kirish</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
