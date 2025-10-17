import { Container } from '../models/container.js';
import { log } from '#utils/log.js';

export async function getAllContainers(req, res) {
  try {
    const allContainers = await Container.find({});

    return res.status(200).json({
      data: allContainers,
    });
  } catch (error) {
    log('getAllContainers', error);

    return res.status(400).json({
      message: error?.message ?? 'Something went wrong retrieving all containers',
    });
  }
}