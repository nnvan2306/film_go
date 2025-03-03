import { lazy } from "react";

export const Todo = lazy(() => import("../components/pages/ToDo"));
export const About = lazy(() => import("../components/pages/About"));
export const Contact = lazy(() => import("../components/pages/Contact"));
