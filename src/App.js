// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Caregivers from './components/Caregivers';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/caregivers" component={Caregivers} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/careers" component={Careers} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
      </Switch>
    </Router>
  );
};

export default App;
