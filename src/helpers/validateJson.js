const validateJson = (json) => {
  try {
    JSON.parse(json);
    return { valid: true, error: "" };
  } catch (err) {
    return { valid: false, error: err.toString() };
  }
};

export default validateJson;
