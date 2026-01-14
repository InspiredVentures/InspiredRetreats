import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import VenueDetail from './pages/VenueDetail';
import Retreats from './pages/Retreats';
import ExperienceDetail from './pages/ExperienceDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import JournalDetail from './pages/JournalDetail';
import ScrollToTop from './components/ScrollToTop';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/BookingModal';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
    return (
        <BookingProvider>
            <Router>
                <div className="flex flex-col min-h-screen bg-aman-pearl text-aman-charcoal selection:bg-aman-stone selection:text-white">
                    <ScrollToTop />
                    <Navbar />
                    <BookingModal />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/destinations" element={<Destinations />} />
                            <Route path="/destinations/:id" element={<VenueDetail />} />
                            <Route path="/retreats" element={<Retreats />} />
                            <Route path="/retreats/:id" element={<ExperienceDetail />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/journal" element={<Journal />} />
                            <Route path="/journal/:id" element={<JournalDetail />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/privacy" element={<Privacy />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </BookingProvider>
    );
}

export default App;
