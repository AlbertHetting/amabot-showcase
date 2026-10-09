import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("amabot/:id", "routes/IndividualProject.jsx"),
] satisfies RouteConfig;