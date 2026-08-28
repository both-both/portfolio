import { Header } from "./components/layout/Header/Header";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Header />

      <main>
        <AppRouter />
      </main>

      <footer>Footer</footer>
    </>
  );
}

export default App;
