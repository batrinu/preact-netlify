import { h, Component } from "preact";
import { Router } from "preact-router";
import { Provider } from "@preact/prerender-data-provider";
import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](https://github.com/preactjs/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render(props) {
    return (
      <Provider value={props}>
        <div id="app">
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
        </div>
      </Provider>
    );
  }
}
