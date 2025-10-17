import { Item } from '../models/item.js';
import { log } from '#utils/log.js';

export async function getItemsInContainer(req, res) {
  try {
    const { containerId } = req.params;
    const items = await Item.find({ container: containerId }).populate('container', 'containerName');


    if (!items || items.length === 0) {
      return res.status(404).json({ message: 'No items found in the specified container' });
    }

    return res.status(200).json({ items });
  } catch (error) {
    log.error('Error fetching items in container:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}