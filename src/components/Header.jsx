import React from "react";
import "./Header.css";

function Header({ user }) {
  return (
    <header className="dashboard-header">
      <img src="/assets/Logo_front.png" alt="Logo Reyna Novillo" className="header-logo" />
      <div className="header-user">
        <span className="user-greeting">Hola, {user?.nombre || "Usuario"}</span>
           {user?.foto ? (
            <img src={user.foto} alt="Usuario" className="user-avatar" />
           ) : (
              <div className="user-avatar initials">
                {user?.nombre
                ? user.nombre.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()
                : "US"}
              </div>
                )}
        </div>
    </header>
  );
}
export default Header;