import axios from "axios";

const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = "d4683b09d0c94ec0aebf0b2e043decbf";
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;
  const { data } = await axios.get(urlPosition);
  return data;
};

export default getUserInfo;
