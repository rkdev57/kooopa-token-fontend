import { Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/pages";

export default function AppRouter() {
  const LoadingMessage = () => <div>Loading..,</div>;

  return (
    <HashRouter>
      <Suspense fallback={<LoadingMessage />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}
