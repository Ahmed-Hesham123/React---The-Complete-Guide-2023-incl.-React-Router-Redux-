import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthentication);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && (
        <Fragment>
          <UserProfile /> <Counter />
        </Fragment>
      )}
    </>
  );
}

export default App;
