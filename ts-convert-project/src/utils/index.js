// TS would accept without response type, but for training purpose please put it anyway. Any or void not allowed.
const throwError = (error) => {
  throw new Error(error);
};

// any not allowed, error can be either an api error, or code error (regular error with faulty code) tip: union type
export const handleError = (error) => {
  if ("status" in error) {
    // We want intellisense for error here, it should suggest "text" property.
    alert(error.text);
  } else {
    throwError(error.message);
  }
};

