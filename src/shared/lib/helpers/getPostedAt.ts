export const getPostedAt = (timestamp: number | undefined) => {
  return new Date(timestamp ?? 0).toLocaleDateString('en-UK', {
    dateStyle: 'medium',
  });
};
