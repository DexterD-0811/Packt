import { Router } from "express";
import { addContainer } from "#modules/containers/controllers/add-container.js";
import { deleteContainer } from "#modules/containers/controllers/delete-container.js";
import { getAllContainers } from "#modules/containers/controllers/get-all-containers.js";
import { getContainer } from "#modules/containers/controllers/get-container.js";
import { updateContainer } from "#modules/containers/controllers/update-container.js";
import { searchContainer } from "#modules/containers/controllers/search-container.js";
import { deleteAllContainer } from "#modules/containers/controllers/delete-all-container.js";
import { validateSearchQuery} from "#modules/containers/middlewares/validate-search-query.js";

const router = new Router();

router.post("/", addContainer);
router.get("/", getAllContainers);
router.get("/search", validateSearchQuery, searchContainer);
router.get("/:id", getContainer);
router.patch("/:id", updateContainer);
router.delete("/:id", deleteContainer);
router.delete("/", deleteAllContainer);

export default router;