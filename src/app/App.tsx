import "./styles/app.scss";
import { Footer, Header } from "./components/common";
import AppRouter from "./AppRouter";
import { FC } from "react";

const App: FC = () => {
  return (
    <>
      <Header />
      <div id="main-content">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
};

export default App;
