import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeRoute from './routes/HomeRoute';
import CategoryRoute from './routes/CategoryRoute';
import ShareRoute from './routes/ShareRoute';
import AboutRoute from './routes/AboutRoute';
import WorkshopRoute from './routes/WorkshopRoute';
import ExportRoute from './routes/ExportRoute';
import { ChecklistsProvider } from './utilities/checklistsContext';
import './App.css';

ReactGA.initialize('UA-155354801-1');

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0) }, [pathname]);
  return null;
};

const App = () => {
  const [mounted, setMounted] = React.useState(false);

  ReactGA.pageview(window.location.pathname + window.location.search);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Router>
      <Route render={({ location }) => (
        <ChecklistsProvider>
          <ScrollToTop />
          <Header />

          <TransitionGroup>
            {
              mounted && (
                <CSSTransition key={location.key} timeout={{ enter: 600, exit: 0 }} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/category/:category/" component={CategoryRoute} />
                    <Route exact path="/about/" component={AboutRoute} />
                    <Route exact path="/workshop/" component={WorkshopRoute} />
                    <Route exact path="/share/" component={ShareRoute} />
                    <Route exact path="/export/:exportId" component={ExportRoute} />
                    <Route path="/" component={HomeRoute} />
                  </Switch>
                </CSSTransition>
              )
            }
          </TransitionGroup>

          <Switch>
            <Route path="/category/" component={Footer} />
            <Route path="/about/" component={Footer} />
            <Route exact path="/" component={Footer} />
          </Switch>
        </ChecklistsProvider>
      )} />
    </Router>
  );
};

export default App;
