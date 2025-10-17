import { Container } from '../models/container.js';
import { log } from '#utils/log.js';

export async function addContainer(req, res) {
  try {
    const { containerName, notes, location, icon, tags } = req.body;

    const newContainer = await Container.create({
      containerName,
      notes,
      location,
      icon,
      tags,
      qrCode: '',
    });

    return res.status(201).json({
      message: 'Successfully created Container',
      data: newContainer,
    });
  } catch (error) {
    log('addContainer', 'Unable to add Container:', error);
    
    return res.status(400).json({
      error: error?.message ?? 'Unable to add Container',
    });
  }
}

