import _ from "lodash";

export const getLastError = (error) => {
  const errors = _.get(error, "data.errors", {});
  const messages = Object.values(errors);
  if (messages.length) {
    console.log("message-----", messages);
    return messages.flat()[0];
  }
  return "Error";
};
