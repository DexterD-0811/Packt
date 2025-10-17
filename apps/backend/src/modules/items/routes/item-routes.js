import { Router } from "express";
import { addItem } from "#modules/items/controllers/add-item.js";
import { deleteItem } from "#modules/items/controllers/delete-item.js";
import { getAllItems } from "#modules/items/controllers/get-all-items.js";
import { getItem } from "#modules/items/controllers/get-item.js";
import { updateItem } from "#modules/items/controllers/update-item.js";
import { searchItem } from "#modules/items/controllers/search-item.js";
import { getItemsInContainer } from "#modules/items/controllers/get-items-in-container.js";
import { deleteItemsByContainer } from "#modules/items/controllers/delete-items-by-container.js";
import { validateContainerExists } from "#modules/items/middlewares/validate-container-exists.js";
import { validateIds } from "#modules/items/middlewares/validate-ids.js";

const router = new Router();

router.post("/:containerId", validateContainerExists, addItem);
router.get("/", getAllItems);
router.get("/search", searchItem);
router.get("/:itemId", getItem);
router.patch("/:itemId", validateIds, updateItem);
router.delete("/:itemId", validateIds, deleteItem);
router.delete("/container/:containerId", validateContainerExists, deleteItemsByContainer);

// New route to get items in a specific container
router.get("/container/:containerId", validateContainerExists, getItemsInContainer);

// New route to delete all items in a specific container
router.delete("/container/:containerId", validateContainerExists, deleteItemsByContainer);

export default router;