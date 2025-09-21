import Header from './components/organisms/Header';
import HomePage from './pages/HomePage';
import SiteFooter from "./components/organisms/SiteFooter";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomePage />
      <SiteFooter />
    </div>
  );
}

export default App;