import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;