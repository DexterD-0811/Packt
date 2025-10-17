import { Item } from "../models/item.js";
import { Container } from "#modules/containers/models/container.js";
import { log } from "#utils/log.js";

export async function addItem(req, res) {
  try {
    const { itemName, description, quantity, image } = req.body;
    const { containerId } = req.params;

    const containerRef = await Container.findById(containerId);

    if (!containerRef) {
      return res.status(404).json({ message: "Container not found" });
    }

    const item = await Item.create({
      itemName,
      description,
      quantity,
      container: containerRef._id,
      containerName: containerRef.containerName,
      image,
    });

    return res.status(201).json({
      message: "Successfully created item",
      data: item,
    });
  } catch (error) {
    log("addItem", "Error creating item:", error);

    return res.status(400).json({
      message: error?.message ?? "Something went wrong creating item",
    });
  }
}