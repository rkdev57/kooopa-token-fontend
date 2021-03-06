import { Footer, Header } from "./components/common";
import AppRouter from "./AppRouter";
import { FC } from "react";
import "antd/dist/antd.css";
import "./styles/app.scss";
import "@typeform/embed/build/css/widget.css";
import { ManagedUIContext } from "./contexts/AppContext";

const App: FC = () => {
  return (
    <ManagedUIContext>
      <Header />
      <div id="main-content">
        <AppRouter />
      </div>
      {/* <Footer /> */}
    </ManagedUIContext>
  );
};

export default App;
