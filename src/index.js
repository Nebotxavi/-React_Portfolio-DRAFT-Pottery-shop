import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { App } from "./App";
import { CollectionProvider } from "./contextProvider";

ReactDOM.render(
  <CollectionProvider>
    <Router>
      <App />
    </Router>
  </CollectionProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
