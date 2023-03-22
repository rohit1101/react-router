import { createBrowserRouter } from "react-router-dom";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Posts from "../pages/Posts/Posts";
import Todo from "../pages/Todo/Todo";
import Profile from "../pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: Home,
  },
  {
    path: "/posts",
    element: Posts,
  },
  {
    path: "/gallery",
    element: Gallery,
  },
  {
    path: "/todo",
    element: Todo,
  },
  {
    path: "/profile",
    element: Profile,
  },
]);
