import React, {useRef} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Footer from './components/Footer';
import About from './components/pages/About';
import ContactUs from './components/pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Quality from './components/submenu/Quality';
import Environment from './components/submenu/Environment';
import Iso45001 from './components/submenu/healthSafety/Iso45001';
import Hippa from './components/submenu/healthSafety/Hippa';
import Haccp from './components/submenu/FoodSafety/Haccp';
import Iso22000 from './components/submenu/FoodSafety/Iso22000';
import Halal from './components/submenu/FoodSafety/Halal';
import Iso27001 from './components/submenu/CyberSecurity/Iso27001';
import Gdpr from './components/submenu/CyberSecurity/Gdpr';
import Pci from './components/submenu/CyberSecurity/Pci';
import Soc from './components/submenu/CyberSecurity/Soc';
import Vapt from './components/submenu/CyberSecurity/Vapt';
import CeMarketing from './components/submenu/ProductCertification/CeMarketing';




function App() {
  return (
    <>
        <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/quality' component={Quality} />
          <Route path='/environment' component={Environment} />
          <Route path='/iso45001' component={Iso45001} />
          <Route path='/hippa' component={Hippa} />
          <Route path='/haccp' component={Haccp} />
          <Route path='/iso22000' component={Iso22000} />
          <Route path='/halal' component={Halal} />
          <Route path='/iso27001' component={Iso27001} />
          <Route path='/gdpr' component={Gdpr} />
          <Route path='/pci' component={Pci} />
          <Route path='/soc' component={Soc} />
          <Route path='/vapt' component={Vapt} />
          <Route path='/cemarketing' component={CeMarketing} />
          <Route path='/about' component={About} />
          <Route path='/contact-us' component={ContactUs} />
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App ;