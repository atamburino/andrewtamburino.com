import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './App.module.css';
import Header from './components/Header';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chat from './components/Chat'
import { SpeedInsights } from "@vercel/speed-insights/react"

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [showFullSite, setShowFullSite] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.app}>
        {showFullSite ? (
          <>
            <Header />
            <SpeedInsights />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        ) : (
          <Chat onComplete={() => setShowFullSite(true)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

