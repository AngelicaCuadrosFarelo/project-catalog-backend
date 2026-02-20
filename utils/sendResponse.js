function send(res, status, data) {
  res.status(status).send(data);
}

export const ok = (res, data) => send(res, 200, data);
export const okNoContent = (res) => send(res, 204, {});
export const created = (res, data) =>
  send(res, 201, { message: "Created successfully", result: data });
export const badRequest = (res, message = "Bad request") =>
  send(res, 400, { message });
export const notFound = (res, message = "Not found") =>
  send(res, 404, { message });
export const unsupportedMedia = (res) =>
  send(res, 415, { message: "Unsupported Media Type" });
export const internalServerError = (res) =>
  send(res, 500, { message: "Internal Server Error" });
export const unauthorized = (res, message = "Unauthorized") =>
  send(res, 401, { message });
export const forbidden = (res, message = "Forbidden") => {
  send(res, 403, { message });
};
