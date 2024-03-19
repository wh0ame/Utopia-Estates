import './App.css';
import Header from './layouts/Header';
import About from './layouts/About';
import Benefits from './layouts/Benefits';
import Apartments from './layouts/Apartments';
import Cta from './layouts/Cta';
import VideoFile from './layouts/VideoFile';
import Map from './layouts/Map';
import Feedback from './layouts/Feedback';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Benefits />
      <Apartments />
      <Cta />
      <VideoFile />
      <Map />
      <Feedback />
      <Footer />
      {/* YouTube LightBox */}
      <div id="youtubelightbox" className="youtubelightbox">
        <div className="youtubelightbox__centeredchild">
          <div className="youtubelightbox__videowrapper">
            <div id="youtubelightboxPlayer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
