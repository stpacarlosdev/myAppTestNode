import { links } from "./links";
import FormPage from "./pages/form-page";

export default [
  {
    routeProps: {
      path: [links.form],
      exact: true,
      component: FormPage,
    },
    name: "Form",
  },
];