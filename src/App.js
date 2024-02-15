// import AllTheBooks from "./components/AllTheBooks/AllTheBooks.jsx";
import Singlecard from "./components/SingleBook/SingleBook.jsx";
import Down from "./components/MyFooter/myFooter.jsx";
import Navigation from "./components/MyNav/MyNav.jsx";
import Welcome from "./components/Welcome/welcome.jsx";
import BookSearch from "./components/AllTheBooks/AllTheBooks.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Welcome />
      <Singlecard />
      {/* <BookSearch books={books} /> */}
      <Down />
    </>
  );
}

export default App;
