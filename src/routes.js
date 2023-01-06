import React from "react";

const ListLeaderBoard = React.lazy(() =>
  import("./views/LeaderBoard/ListData")
);
const routes = [
  { path: "/", exact: true, name: "Leader Board" },
  { path: "/leader-board", name: "Leader Board", element: ListLeaderBoard },
];

export default routes;
