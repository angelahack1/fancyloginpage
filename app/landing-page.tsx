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
            <Home size={24} />
            <span>LePago</span>
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
            <a href="#" className="nav-button">
              <User size={16} />
              <span>Profile</span>
            </a>
            <Link href="/login" className="nav-button primary">
              <LogIn size={16} />
              <span>Sign In</span>
            </Link>
            <a href="#" className="nav-button">
              <UserPlus size={16} />
              <span>Sign Up</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-section">
          <h1 className="section-title">Welcome to LePago</h1>
          <p className="section-text">
            This is your beautiful landing page with a horizontal menu bar that matches 
            the styling of your login page. The navigation includes a logo, menu items, 
            and action buttons with the same color scheme and design language.
          </p>
        </div>

        <div className="content-section">
          <h2 className="section-title">Features</h2>
          <p className="section-text">
            The menu bar features responsive design, smooth hover effects, and mobile-friendly 
            navigation. It uses the same color palette and styling as your login form for 
            a consistent user experience.
          </p>
        </div>
      </main>
    </div>
  );
}
