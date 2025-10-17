import { Container } from '#modules/containers/models/container.js';

export async function validateContainerExists(req, res, next) {
  try {
    const { containerId } = req.params;

    if (!containerId) {
      return res.status(400).json({ message: 'Container ID is required' });
    }

    const container = await Container.findById(containerId);

    if (!container) {
      return res.status(404).json({ message: 'Container not found' });
    }

    req.container = container;

    next();
  } catch (error) {
    console.error('Error validating container existence:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
