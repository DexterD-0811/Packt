import { Container } from '../models/container.js';
import { log } from '#utils/log.js';

export async function searchContainer(req, res) {
  try {
    const { search } = req.query;
    const containers = await Container.find({
      containerName: { $regex: search, $options: 'i' },
    });

    return res.status(200).json({
      message: 'Successfully retrieved containers',
      data: containers,
    });
  } catch (error) {
    log('searchContainer', 'Error searching containers:', error);

    return res.status(400).json({
      message: error?.message ?? 'Something went wrong searching containers',
    });
  }
}