import Header from './components/organisms/Header';
import HomePage from './pages/HomePage';
import SiteFooter from "./components/organisms/SiteFooter";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 md:pt-20">
        <HomePage />
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;