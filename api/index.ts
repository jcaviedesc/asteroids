import express from "express";

import asteroidRoutes from "./src/routes/AsteroidRouter";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Top level router for the route 'api/v1'
const apiRouter = express.Router();
app.use("/api/v1", apiRouter);

// routes by domain
apiRouter.use(asteroidRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
