import Main from "../components/Main";
import Portfolio from "../components/Portfolio";
import Contacts from "../components/Contacts";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contacts", element: <Contacts /> },
];

export default routes;