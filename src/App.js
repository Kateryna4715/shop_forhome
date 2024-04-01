import Main from "./ui/Main";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Shop from "./components/Shop";

import "./scss/style.scss";
function App() {
  return (
    <>
      <Header />
      <Main>
        <Shop />
      </Main>
      <Footer />
    </>
  );
}

export default App;
