export const formatFileSize = (bytes: number): string => {
  const megabytes = bytes / (1024 * 1024);
  return `${megabytes.toFixed(2)}MB`;
};
