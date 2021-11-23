import client from "./client";

export const registerVendor = (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(formData);
  return client.post(`${process.env.VENDOR}/vendor/create`, formData, config); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const getByVendorid = (vendorid) => {
  return client.get(`${process.env.VENDOR}/vendor/info/${vendorid}`);
};

export const getByVendordomain = (domain) => {
  return client.get(`${process.env.VENDOR}/vendor/infobydomain/${domain}`);
};

export const getByUserid = (userid) => {
  return client.get(`${process.env.VENDOR}/vendor/info/@${userid}`);
};

export const listVendor = () => client.get(`${process.env.VENDOR}/vendor/list`);
