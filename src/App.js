import Cards from "./components/AllTheBooks/AllTheBooks.jsx";
import Down from "./components/MyFooter/myFooter.jsx";
import Navigation from "./components/MyNav/MyNav.jsx";
import Welcome from "./components/Welcome/welcome.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Welcome />
      <Cards />
      <Down />
    </>
  );
}

export default App;
