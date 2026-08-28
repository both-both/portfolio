import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />

      <main>
        <AppRouter />
      </main>

      <Footer />
    </>
  );
}

export default App;
