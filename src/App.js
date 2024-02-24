import AllTheBooks from "./COMPONENTS/ALLTHEBOOKS/allTheBooks.jsx";
import MyFooter from "./COMPONENTS/FOOTER/footer.jsx";
import MyNav from "./COMPONENTS/NAVBAR/navbar.jsx";
import Welcome from "./COMPONENTS/WELCOME/welcome.jsx";
import { SearchBookProvider } from "./COMPONENTS/CONTEXT/searchBooksContext";
import { useContext } from "react";
import { ThemeContext } from "./COMPONENTS/CONTEXT/ThemeContext.js";
import CommentArea from "./COMPONENTS/COMMENTAREA/commenArea.jsx";
import { Container } from "react-bootstrap";

function App() {
  const { isDarkModeActive } = useContext(ThemeContext);

  return (
    <div className={`App bg-${isDarkModeActive ? "dark" : "light"}`}>
      <>
        <SearchBookProvider>
          <MyNav />
          <Welcome />
          <Container className="d-flex justify-content-center">
            <AllTheBooks />
            <CommentArea />
          </Container>
          <MyFooter />
        </SearchBookProvider>
      </>
    </div>
  );
}

export default App;
