import Navbar from './common/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import HotelDestinationListView from "./hotelDestinationList/HotelDestinationListView.container";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route path="/">
              <HotelDestinationListView />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
