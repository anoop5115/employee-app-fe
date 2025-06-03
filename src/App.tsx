import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { CreateEmployeePage } from "./Pages/CreateEmployee/CreateEmployee";

import { Login } from "./Pages/Login/Login";

import NotFound from "./Pages/notfound";
import { Children } from "react";
import { LayoutPage } from "./components/Layout/Layout";
import { Details } from "./Pages/details";
import { EmployeeList } from "./components/employeelist/employeelist";
import { ListEmployeePage } from "./Pages/listEmployeePage/listEmployeePage";
import { EditEmployeePage } from "./Pages/EditEmployee/EditEmployeePage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/employee",

      element: <LayoutPage />,

      children: [
        { index: true, element: <ListEmployeePage /> },
        { path: ":id", element: <Details /> },
        {
          path: "list",
          element: <ListEmployeePage />,
        },
        {
          path: "create",
          element: <CreateEmployeePage />,
        },
        {
          path: "edit/:id",
          element: <EditEmployeePage />,
        },
        {
          path: "details/:id",
          element: <Details />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
