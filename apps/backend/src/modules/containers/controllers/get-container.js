import { Container } from "../models/container.js";
import { log } from "#utils/log.js";

export async function getContainer (req, res) {
  const { id } = req.params;

  try {
    const container = await Container.findById(id).orFail();

    return res.status(200).json(container);
  } catch (error) {
    log('getContainer', 'Unable to retrieve Container:', error);

    let statusCode = 400;

    if (error.name === 'DocumentNotFoundError') {
      statusCode = 404;
    }

    return res.status(statusCode).json({
      error: error?.message ?? 'Unable to retrieve Container',
    });
  }
}