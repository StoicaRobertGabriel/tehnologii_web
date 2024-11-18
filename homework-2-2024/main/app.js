/**
 * the function renders an object to a tagged string and performs token substitution
 * @param {object} input - a javascript object representing a hierachycal structure
 * @param {object} values - a list of key value pairs where the key is a token to be replaced with the value in strings present in input
 */
function render(input, values) {
  if (
    typeof input !== "object" ||
    input === null ||
    Array.isArray(input) ||
    typeof values !== "object" ||
    values === null ||
    Array.isArray(values)
  ) {
    throw new Error("InvalidType");
  }

  if (Object.keys(input).length === 0) {
    return "";
  }

  function substitute(str, values) {
    return str.replace(/\${(.*?)}/g, (_, key) => {
      if (values[key] !== undefined) {
        return values[key];
      }
      return "";
    });
  }

  function renderObject(obj) {
    let result = "";

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "string") {
        result += `<${key}>${substitute(value, values)}</${key}>`;
      } else if (typeof value === "object" && value !== null) {
        result += `<${key}>${renderObject(value)}</${key}>`;
      }
    }

    return result;
  }

  return renderObject(input);
}

module.exports = {
  render,
};
