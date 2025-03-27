import React from 'react';
import './App.css';
import FullWidthPhoto from './components/FullWidthPhoto/FullWidthPhoto';
import Events from './components/Events/Events';
import Header from './components/Header/Header';
import DressCodeButton from './components/DressCode/DressCode';
import Attending from './components/RSVP/Attending';
import Gallery, { GalleryProps, PhotoItem } from './components/Gallery/Gallery';

function App() {
  const galleryItems: PhotoItem[] = [
    {
      src: '/images/1.jpeg',
      alt: 'Sunset',
      description: 'We crushed every level of Overcooked with 3 stars!',
    },
    {
      src: '/images/2.jpeg',
    },
    {
      src: '/images/3.jpeg',
    },
    {
      src: '/images/4.jpeg',
      description: 'Liam: Don\'t even think about touching the housework in this house!',
    },
    {
      src: '/images/5.jpeg',
      description: 'We hug even when we argue.'
    },
    {
      src: '/images/6.jpeg',
    },
  ];
  
  return (
    <div className="App">
      {/* Hero Section: FullWidthPhoto with overlaid Header */}
      <section id="home" style={{ position: 'relative' }}>
        <Header />
        <FullWidthPhoto />
      </section>
      <main>
        {/* <section id="dresscode" style={{ margin: '2rem 0', textAlign: 'center' }}>
          <DressCodeButton />
        </section> */}
        <section id="events">
          <Events />
        </section>
        <section id="attending">
          <Attending />
        </section>
        <section id="gallery">
          <Gallery photos={galleryItems}  />
        </section>
      </main>
    </div>
  );
}

export default App;
