export const getProfileFromLS = () => {
  const profileString = localStorage.getItem('profile');
  if (!profileString) return {};

  const profileFromLS = JSON.parse(profileString);
  return profileFromLS;
};
