export const getProfileFromLS = () => {
  const profileString = localStorage.getItem('profile');
  if (!profileString) return null;

  const profileFromLS = JSON.parse(profileString);
  return profileFromLS;
};
