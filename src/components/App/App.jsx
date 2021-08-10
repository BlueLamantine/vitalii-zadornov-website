import Header from '../Header';
import NavBar from '../NavBar';
import Home from '../Home';
import Footer from '../Footer';
import Gallery from '../Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <NavBar />

      <Switch>
        <Route path="/contact">
          <div>contact</div>
        </Route>
        <Route path="/blog">
          <div>blog</div>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
