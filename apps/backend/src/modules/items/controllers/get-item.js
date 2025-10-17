import { Item } from "../models/item.js";
import { log } from "#utils/log.js";

export async function getItem (req, res) {
  const { itemId } = req.params;
  console.log("Getting item with ID:", itemId);

  try {
    const item = await Item.findById(itemId).orFail();

    return res.status(200).json(item);
  } catch (error) {
    log("getItem", "Unable to retrieve Item:", error);

    let statusCode = 400;

    if (error.name === "DocumentNotFoundError") {
      statusCode = 404;
    }

    return res.status(statusCode).json({
      error: error?.message ?? "Unable to retrieve Item",
    });
  }
}