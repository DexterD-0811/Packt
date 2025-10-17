import { Container } from "../models/container.js";
import { log } from "#utils/log.js";

export async function deleteAllContainer(req, res) {
  try {
    const deletedContainers = await Container.deleteMany({});

    return res.status(200).json({
      message: 'Successfully deleted all Containers',
      data: deletedContainers,
    });
  } catch (error) {
    log('deleteAllContainer', 'Unable to delete all Containers:', error);

    return res.status(400).json({
      error: error?.message ?? 'Unable to delete all Containers',
    });
  }
}