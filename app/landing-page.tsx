"use client";

import { useState } from "react";
import { Menu, X, Home, User, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import "./landing-page.css";

export function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <img className="nav-logo-icon" src="bill.png" width="106" height="106" alt="Bill Receipt icon" title="Bill Receipt icon" />
            <span className="nav-logo-text text-black-bolded">LePago</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          {/* Navigation Actions */}
          <div className="nav-actions">
            <Link href="/login" className="nav-button primary">
              <LogIn size={16} />
              <span>Sign In/Up</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-section">
          <h1 className="section-title">Welcome to LePago</h1>
          <p className="section-text">
            Hi!, Welcome to LePago, the application that will allow you to buy and/or sell without complications, in a easy and fast way!
          </p>
        </div>
      </main>
    </div>
  );
}
