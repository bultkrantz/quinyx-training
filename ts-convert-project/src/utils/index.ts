// Put appropriete return type for this util, any or void not allowed
const throwError = (error: string): never => {
  throw new Error(error);
};

// any not allowed, error can be either an api error, or code error (regular error with faulty code)
export const handleError = (error: Error | Response) => {
  if ("status" in error) {
    // We want intellisense for error here, it should suggest "text" property.
    alert(error.text);
  } else {
    throwError(error.message);
  }
};

