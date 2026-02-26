import React from 'react';
import './HomePage.css'; // make sure to import the CSS

const HomePage = () => {
  // Data arrays for features and projects
  const features = [
    {
      title: 'AI Budgeting',
      desc: 'Generate accurate film budgets with AI-powered analysis. Identify cost drivers and get data-driven projections.'
    },
    {
      title: 'AI Co-Pilot Editor',
      desc: "Overcome writer's block with AI-driven prompts and suggestions for seamless writing flow."
    },
    {
      title: 'AI Pitch Deck',
      desc: 'Create compelling pitch decks with templates that suggest casts and visualize your story.'
    },
    {
      title: 'Analytics',
      desc: 'Identify plot holes and receive thorough script coverage analysis with targeted insights.'
    },
    {
      title: 'Multilingual',
      desc: 'Work seamlessly in Spanish, French, Portuguese, or Russian without language barriers.'
    },
    {
      title: 'Automated Breakdown',
      desc: 'Streamline pre-production with automatic script element organization for efficient planning.'
    }
  ];

  const projectImages = [
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800&h=600', // Movie theater interior
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800&h=600', // Film reel
    'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800&h=600', // Clapperboard / behind scenes
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800&h=600', // Camera lens
    'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800&h=600', // Video editing software
    'https://images.unsplash.com/photo-1574267432553-4b4628081524?auto=format&fit=crop&q=80&w=800&h=600'  // Cinema neon sign
  ];

  const projects = Array.from({ length: 6 }, (_, i) => ({
    title: `Project Title ${i + 1}`,
    desc: 'Short description of the project and its impact. Leveraging AI to redefine the cinematic experience with groundbreaking visuals.',
    image: projectImages[i]
  }));

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">NolanAI</div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#get-started" className="get-started-btn">Get Started</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Transform Your<br />Creative Vision</h1>
          <p>NolanAI is a collaborative film production suite covering the full production process from concept to final cut.</p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">View Portfolio</a>
            <a href="#demo" className="btn-secondary">Watch Demo</a>
          </div>
        </div>
      </section>

      {/* Capabilities / Features */}
      <section id="features" className="capabilities">
        <div className="container">
          <h2 className="section-title">Our Powerful Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase / Recent Projects */}
      <section id="portfolio" className="showcase">
        <div className="container">
          <h2 className="section-title">Recent Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'transparent' // Hides the placeholder text logic from the CSS if any remains
                  }}
                ></div>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <h2>NolanAI</h2>
            <p>Empowering creators with AI-driven tools to revolutionize the film production process from start to finish.</p>
          </div>
          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-connect">
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © 2026 NolanAI. All rights reserved.
            <a href="#privacy">Privacy Policy</a> · <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;