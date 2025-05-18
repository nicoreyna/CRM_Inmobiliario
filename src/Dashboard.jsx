import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";

function Dashboard({ children, user }) {
  return (
    <div className="layout">
      <Header user={user} />
      <div className="main-content">
        <Sidebar />
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;