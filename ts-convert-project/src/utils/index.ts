// Put appropriete return type for this util
const throwError = (error: string): never => {
  throw new Error(error);
};

// any not allowed
export const handleError = (error: Error | Response) => {
  if ("status" in error) {
    alert(error.text);
  } else {
    throwError(error.message);
  }
};

