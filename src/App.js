import Main from "./components/main/main.component";
import Projects from "./components/projects/project.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Main></Main>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </Fragment>
  );
}

export default App;
