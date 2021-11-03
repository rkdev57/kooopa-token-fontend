import { Footer, Header } from "./components/common";
import AppRouter from "./AppRouter";
import { FC } from "react";
import "antd/dist/antd.css";
import "./styles/app.scss";
import "@typeform/embed/build/css/widget.css";
import { ManagedUIContext } from "./contexts/AppContext";
import { Suspense } from "react";
import "./utility/i18n";

const App: FC = () => {
  return (
    <ManagedUIContext>
      <Suspense fallback="">
        <Header />
        <div id="main-content">
          <AppRouter />
        </div>
        {/* <Footer /> */}
      </Suspense>
    </ManagedUIContext>
  );
};

export default App;
