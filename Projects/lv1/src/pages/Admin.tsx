import React, { useState } from "react";
import "./Admin.css";
import Seo from '../components/Seo'

const sidebarLinks = [
  { label: "Dashboard" },
  { label: "Bookings" },
  { label: "Contacts" },
  { label: "Statistics" },
  { label: "Calendar" },
  { label: "Finance" },
];

const Admin: React.FC = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setSignedIn(true);
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  if (!signedIn) {
    return (
      <>
        <Seo
          title="Admin Login"
          description="Private admin area for Breezyee Moves."
          canonical="/admin"
          noindex
        />
        <div className="admin-login-bg">
          <div className="admin-login-card">
            <h1 className="admin-login-title">Luxury Admin Login</h1>
            <form className="admin-signin-form" onSubmit={handleSignIn}>
              <div className="admin-form-group">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="admin-form-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <div className="admin-error">{error}</div>}
              <button className="admin-signin-btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Admin Dashboard"
        description="Private admin dashboard for Breezyee Moves."
        canonical="/admin"
        noindex
      />
      <div className="admin-dashboard-bg">
        <div className="admin-dashboard-card">
          <aside className="admin-sidebar">
            <div className="admin-sidebar-header">Luxury Admin</div>
            <nav className="admin-sidebar-nav">
              {sidebarLinks.map((link) => (
                <button
                  key={link.label}
                  className={`admin-sidebar-link${
                    selectedSection === link.label ? " active" : ""
                  }`}
                  onClick={() => setSelectedSection(link.label)}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </aside>
          <main className="admin-main">
            <div className="admin-main-top">
              <div>
                <p className="admin-subtitle">Welcome back</p>
                <h1 className="admin-heading">Luxury Admin Dashboard</h1>
              </div>
              <div className="admin-profile-pill">Admin</div>
            </div>
            <div className="admin-panels">
              <div className="admin-panel">
                <div className="admin-panel-title">Bookings</div>
                <div className="admin-panel-value">—</div>
              </div>
              <div className="admin-panel">
                <div className="admin-panel-title">Upcoming</div>
                <div className="admin-panel-value">—</div>
              </div>
              <div className="admin-panel">
                <div className="admin-panel-title">Revenue</div>
                <div className="admin-panel-value">—</div>
              </div>
            </div>
            <section className="admin-empty-state">
              <h2>No active data</h2>
              <p>The dashboard is styled for luxury and ready for your content.</p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
