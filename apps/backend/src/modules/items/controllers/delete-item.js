import { Item } from "../models/item.js";
import { log } from "#utils/log.js";

export async function deleteItem(req, res) {
  try {
    const { containerId } = req.params;

    const deletedItem = await Item.findByIdAndDelete(containerId);

    if (!deletedItem) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    return res.status(200).json({
      message: "Successfully deleted item",
      data: deletedItem,
    });
  } catch (error) {
    log("deleteItem", "Error deleting item:", error);

    return res.status(400).json({
      message: error?.message ?? "Something went wrong deleting item",
    });
  }
}