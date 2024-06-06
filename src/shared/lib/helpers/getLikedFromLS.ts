export const getLikedFromLS = () => {
  const liked = localStorage?.getItem('liked');

  return JSON.parse(liked ?? '[]') as Array<{
    id: string | undefined;
    title: string;
  }>;
};

export const isIdInLiked = (id: string | undefined) => {
  const liked = getLikedFromLS();

  return liked.find((job) => job.id === id);
};
