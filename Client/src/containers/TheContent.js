import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CFade } from "@coreui/react";

import { Container } from "@material-ui/core";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  if (localStorage.getItem("token") === null) {
    //return <Redirect to='/login'/>
  }
  return (
    <main
    //className="c-main"
    >
      <Container disableGutters maxWidth={false}>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component {...props} />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </Container>
    </main>
  );
};

export default React.memo(TheContent);
