import { Item } from "../models/item.js";
import { log } from "#utils/log.js";

export async function deleteItemsByContainer(req, res) {
  try {
    const { containerId } = req.params;

    if (!containerId) {
      return res.status(400).json({ message: "Container ID is required" });
    }

    const result = await Item.deleteMany({ container: containerId });

    return res.status(200).json({
      message: `Successfully deleted ${result.deletedCount} items from container ${containerId}`,
      data: result,
    });
  } catch (error) {
    log("deleteItemsByContainer", "Error deleting items from container:", error);

    return res.status(400).json({
      message: error?.message ?? "Something went wrong deleting items from container",
    });
  }
}
