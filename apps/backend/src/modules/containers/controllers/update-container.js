import { Container } from '../models/container.js';
import { log } from '#utils/log.js';

export async function updateContainer(req, res) {
  try {
    const { id } = req.params;
    const { containerName, notes, location, icon, tags, qrCode } = req.body;

    const updatedContainer = await Container.findByIdAndUpdate(
      id,
      { containerName, notes, location, icon, tags, qrCode },
      { new: true }
    );

    if (!updatedContainer) {
      return res.status(404).json({
        message: 'Container not found',
      });
    }

    return res.status(200).json({
      message: 'Successfully updated container',
      data: updatedContainer,
    });
  } catch (error) {
    log('updateContainer', 'Error updating container:', error);

    return res.status(400).json({
      message: error?.message ?? 'Something went wrong updating container',
    });
  }
}