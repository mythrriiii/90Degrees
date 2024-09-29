import axios from "axios";

const url = "https://cuddly-sloths-relate.loca.lt";

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
export const createImage = async (imageFile, email) => {
  const formData = new FormData();
  formData.append("photo", imageFile);
  formData.append("email", email);

  const response = await axios.post(url + "/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};