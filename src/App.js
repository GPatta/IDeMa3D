import Home from './Home'
import Designs from './Designs'
import Store from './Store'
import About from './About'
import ObjectPage from './ObjectPage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/designs" component={Designs} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/about" component={About} />
          <Route path="/object" component={ObjectPage} />
        </Switch>
      </Router>
        
    </>
  );
}

export default App;