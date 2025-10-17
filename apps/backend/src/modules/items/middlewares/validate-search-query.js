export function validateSearchQuery(req, res, next) {
  const { search } = req.query;

  if (!search || search.trim() === '') {
    return res.status(400).json({ error: 'Search query is required' });
  }

  next();
}
