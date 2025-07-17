module.exports = {
  validateBugData: (data) => {
    const errors = {};
    if (!data.title || data.title.trim() === '') {
      errors.title = 'Title is required';
    }
    if (!data.description || data.description.trim() === '') {
      errors.description = 'Description is required';
    }
    if (!data.status || !['open', 'in-progress', 'resolved'].includes(data.status)) {
      errors.status = 'Status must be one of: open, in-progress, resolved';
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  },
};