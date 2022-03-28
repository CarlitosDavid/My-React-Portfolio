import Topbar from "./components/topbar/Topbar";
import Aboutme from "./components/aboutme/aboutme";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contacts/Contacts";
import Works from "./components/works/Works";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Aboutme />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
