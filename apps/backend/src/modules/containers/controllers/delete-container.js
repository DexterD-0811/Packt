import { Container } from '../models/container.js';
import { log } from '#utils/log.js';

export async function deleteContainer(req, res) {
  const { id } = req.params;

  try {
    const deletedContainer = await Container.findByIdAndDelete(id).orFail();

    return res.status(200).json({
      message: 'Successfully deleted Container',
      data: deletedContainer,
    });
  } catch (error) {
    log('deleteContainer', 'Unable to delete Container:', error);

    let statusCode = 400;

    if (error.name === 'DocumentNotFoundError') {
      statusCode = 404;
    }

    return res.status(statusCode).json({
      error: error?.message ?? 'Unable to delete Container',
    });
  }
}