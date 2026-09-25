const STORAGE_KEY = "brother-profile-data";

const defaultProfile = {
  name: "",
  profession: "",
  email: "",
  phone: "",
  location: "",
  about: "",
  skills: [],
  linkedin: "",
  github: "",
};

export const getProfile = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return defaultProfile;
    }

    return {
      ...defaultProfile,
      ...JSON.parse(saved),
    };
  } catch (error) {
    console.error("Failed to load profile:", error);
    return defaultProfile;
  }
};

export const saveProfile = (profile) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
};

export const clearProfile = () => {
  localStorage.removeItem(STORAGE_KEY);
};