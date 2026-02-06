import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { EmailSignup } from './components/EmailSignup';
import { Footer } from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Problem />
      <Solution />
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default App;