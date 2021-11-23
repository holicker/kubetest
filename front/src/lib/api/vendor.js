import axios from "axios";


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.baseURL = `${process.env.REACT_APP_VENDOR}`;
const vendor_client = axios.create();

export const registerVendor = (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(formData);
  return vendor_client.post(`/vendor/create`, formData, config); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const getByVendorid = (vendorid) => {
  return vendor_client.get(`/vendor/info/${vendorid}`);
};

export const getByVendordomain = (domain) => {
  return vendor_client.get(`/vendor/infobydomain/${domain}`);
};

export const getByUserid = (userid) => {
  return vendor_client.get(`/vendor/info/@${userid}`);
};

export const listVendor = () => vendor_client.get(`/vendor/list`);
