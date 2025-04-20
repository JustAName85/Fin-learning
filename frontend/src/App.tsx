import { useRef } from "react";
import { Header } from "./components/pages/Header";
import { Main } from "./components/pages/Main";
import background from "/background.jpg";
import { Footer } from "./components/pages/Footer";

function App() {
  const focusEmailField = useRef<() => void>(null);

  return (
    <div
      className="bg-cover bg-center w-full h-fit"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header focusEmailField={focusEmailField} />
      <Main focusEmailField={focusEmailField} />
      <Footer />
    </div>
  );
}

export default App;
