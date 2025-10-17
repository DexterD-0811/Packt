import { Item } from "../models/item.js";
import { log } from "#utils/log.js";

export async function updateItem(req, res) {
  try {
    const { itemId } = req.params;
    const { itemName, description, quantity, container, image } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { itemName, description, quantity, container, image },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    return res.status(200).json({
      message: "Successfully updated item",
      data: updatedItem,
    });
  } catch (error) {
    log("updateItem", "Error updating item:", error);

    return res.status(400).json({
      message: error?.message ?? "Something went wrong updating item",
    });
  }
}