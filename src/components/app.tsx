import { FunctionalComponent, h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';
import Home from '../demos/home/home';

const App: FunctionalComponent = () => {
  let currentUrl: string;
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
  };

  return (
    <div id="app">
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;
