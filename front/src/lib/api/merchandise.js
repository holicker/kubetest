import axios from "axios";


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.baseURL = `${process.env.REACT_APP_VENDOR}`;
const merchandise_client = axios.create();
export const writeMerchandise = (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(formData);
  return merchandise_client.post(`/vendor/register`, formData, config); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readMerchandise = (id) => {
  console.log(`readMerchandise id : ${id}`);
  return merchandise_client.get(`/vendor/merchandise/${id}`);
};

export const merchandiseList = ({ vendorid }) => {
  return merchandise_client.get(`/vendor/merchandiseinfo/${vendorid}`);
  //return merchandise_client.get(`/merchandise/list?${queryString}`);
};

export const merchandiseListByDomain = ({ vendordomain }) => {
  return merchandise_client.get(`/vendor/merchandiseinfobydomain/${vendordomain}`);
  //return merchandise_client.get(`/merchandise/list?${queryString}`);
};

export const updateMerchandise = ({ id, title, body, tags }) =>
  merchandise_client.post(`/merchandise/register`, { id, title, body, tags });

export const deleteMerchandise = (id) => merchandise_client.delete(`/merchandise/${id}`);
