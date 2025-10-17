export function validateIds(req, res, next) {
  const { containerId, itemId } = req.params;

  if (!containerId && !itemId) {
    return res.status(400).json({ message: "containerId or itemId is required in params" });
  }

  next();
}
