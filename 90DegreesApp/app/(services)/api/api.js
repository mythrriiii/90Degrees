import axios from "axios";

const url = "https://soft-forks-double.loca.lt/";

// Register User
export const registerUser = async (user) => {
  console.log(user);
  const response = await axios.post(url + "/api/users/register", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// Login User
export const loginUser = async (user) => {
  const response = await axios.post(url + "/api/users/login", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// Create Image
export const createImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("photo", imageFile);

  const response = await axios.post(url + "/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};