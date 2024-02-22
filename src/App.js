import AllTheBooks from "./COMPONENTS/ALLTHEBOOKS/allTheBooks.jsx";
import MyFooter from "./COMPONENTS/FOOTER/footer.jsx";
import MyNav from "./COMPONENTS/NAVBAR/navbar.jsx";
import Welcome from "./COMPONENTS/WELCOME/welcome.jsx";
import { SearchBookProvider } from "./COMPONENTS/CONTEXT/searchBooksContext";

function App() {
  return (
    <div className="App">
      <>
        <SearchBookProvider>
          <MyNav />
          <Welcome />
          <AllTheBooks />
          <MyFooter />
        </SearchBookProvider>
      </>
    </div>
  );
}

export default App;
