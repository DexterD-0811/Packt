import { Item } from "../models/item.js";
import { log } from "#utils/log.js";

export async function searchItem(req, res) {
  const { search } = req.query;

  try {
    const items = await Item.find({
      $or: [
        { itemName: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    });

    return res.status(200).json({
      message: "Successfully retrieved items",
      data: items,
    });
  } catch (error) {
    log("searchItem", "Unable to search items:", error);

    return res.status(400).json({
      error: error?.message ?? "Unable to search items",
    });
  }
}