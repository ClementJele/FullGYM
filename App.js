import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Subscription from './components/Subscription/subscription';
import Testimonies from './components/Testimonies/Testimonies';

function App() {
  return (
    <div className="App">
       <Hero/>
       <Programs/>
       <Reasons/>
       <Subscription/>
       <Testimonies/>
       <Join/>
       <Footer/>
    </div>
  );
}

export default App;
