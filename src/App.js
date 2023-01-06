import "antd/dist/antd.min.css";
import "antd-button-color/dist/css/style.css"; // or 'antd-button-color/dist/css/style.less'

import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Views
const ListLeaderBoard = React.lazy(() =>
  import("./views/LeaderBoard/ListData")
);
// Pages
const Page404 = React.lazy(() => import("./views/Pages/Page404"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route
              exact
              path="/leader-board"
              name="Leader Board"
              element={<ListLeaderBoard />}
            />
            <Route path="*" name="Leader Board" element={<ListLeaderBoard />} />
            <Route path="/404" name="LOST" element={<Page404 />} />
          </Routes>
          <ToastContainer />
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
