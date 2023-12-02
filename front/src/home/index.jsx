import { links } from "./links";
import HomePage from "./page/home-page";

export default [
  {
    routeProps: {
      path: [links.home, links.main],
      exact: true,
      component: HomePage,
    },
    name: "Home",
  },
];
