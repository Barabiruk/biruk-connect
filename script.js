<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Biruk Connect — Personal website, ideas, learning, and growth.">
  <meta name="theme-color" content="#0f172a">
  <title>Biruk Connect | Personal Website</title>

  <style>
    :root {
      --bg-dark: #0b1329;
      --navy-card: rgba(15, 23, 42, 0.75);
      --gold: #fbbf24;
      --gold-hover: #d97706;
      --cyan: #38bdf8;
      --ink-light: #f8fafc;
      --muted: #94a3b8;
      --glass-bg: rgba(255, 255, 255, 0.05);
      --glass-border: rgba(255, 255, 255, 0.12);
      --card-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: var(--ink-light);
      background: var(--bg-dark);
      line-height: 1.65;
      overflow-x: hidden;
      position: relative;
    }

    /* Background Interactive 3D Particle Canvas */
    #bg-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }

    a { color: inherit; text-decoration: none; }
    em { font-style: normal; color: var(--cyan); }
    .wrap { width: min(1100px, 92%); margin: auto; }

    /* Header Navigation */
    header {
      background: rgba(11, 19, 41, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid var(--glass-border);
    }

    .nav {
      min-height: 76px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }

    .brand {
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: .5px;
    }
    .brand span { color: var(--gold); }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-links {
      display: flex;
      gap: 22px;
      align-items: center;
    }
    .nav-links a {
      font-size: .95rem;
      color: #e2e8f0;
      transition: color 0.3s ease;
    }
    .nav-links a:hover { color: var(--gold); }

    .lang-select {
      border: 1px solid var(--glass-border);
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      padding: 8px 12px;
      border-radius: 10px;
      font: inherit;
      cursor: pointer;
      backdrop-filter: blur(5px);
      outline: none;
    }
    .lang-select option { background: #0f172a; color: #fff; }

    .menu-toggle {
      display: none;
      background: transparent;
      border: 1px solid var(--glass-border);
      color: #fff;
      font-size: 1.3rem;
      padding: 6px 12px;
      border-radius: 8px;
      cursor: pointer;
    }

    /* Hero Section */
    .hero {
      padding: 90px 0 100px;
    }

    .hero-grid {
      display:
