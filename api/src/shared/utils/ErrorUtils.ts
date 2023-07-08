export function parseToError(error: unknown): Error {
  return error instanceof Error ? error : new Error(JSON.stringify(error));
}
