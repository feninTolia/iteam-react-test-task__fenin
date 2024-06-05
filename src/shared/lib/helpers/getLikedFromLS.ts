export const getLikedFromLS = () => {
  const liked = localStorage.getItem('liked');

  const likedArray = JSON.parse(liked ?? '[]') as Array<{
    id: string | undefined;
    title: string;
  }>;

  return likedArray;
};

export const isIdInLiked = (id: string | undefined) => {
  const liked = getLikedFromLS();

  return liked.find((job) => job.id === id);
};
