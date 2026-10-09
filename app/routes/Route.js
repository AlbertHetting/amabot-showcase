import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/individualProject.jsx"),
  route("/", "routes/individualProject.jsx"),
  route("public/data.js"),
];
