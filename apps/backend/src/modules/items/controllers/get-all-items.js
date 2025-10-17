import { Item } from "../models/item.js";
import { log } from "#utils/log.js";

export async function getAllItems(req, res) {
  try {
    const items = await Item.find();

    return res.status(200).json({
      message: "Successfully retrieved items",
      data: items,
    });
  } catch (error) {
    log("getAllItems", "Unable to retrieve items:", error);

    return res.status(400).json({
      error: error?.message ?? "Unable to retrieve items",
    });
  }
}