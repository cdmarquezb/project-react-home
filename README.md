This is a React application for the Home page of our microfrotend app.

For react application we will need:

```
import App from "./App";

const mount = (el) => {
    ReactDOM.render(<App history={history} />, el);
}

export { mount };
```

for development mode we call the mount funciton immediatly:
```
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_home-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
```

This Project is running at http://localhost:8081/ after `npm start`
