import client from "./client";

export const registerVendor = (formData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(formData);
  return client.post("http://a411d570b6ec54034b20d92883abbb27-457135104.ap-northeast-2.elb.amazonaws.com/vendor/create", formData, config); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const getByVendorid = (vendorid) => {
  return client.get(`http://a411d570b6ec54034b20d92883abbb27-457135104.ap-northeast-2.elb.amazonaws.com/vendor/info/${vendorid}`);
};

export const getByVendordomain = (domain) => {
  return client.get(`http://a411d570b6ec54034b20d92883abbb27-457135104.ap-northeast-2.elb.amazonaws.com/vendor/infobydomain/${domain}`);
};

export const getByUserid = (userid) => {
  return client.get(`http://a411d570b6ec54034b20d92883abbb27-457135104.ap-northeast-2.elb.amazonaws.com/vendor/info/@${userid}`);
};

export const listVendor = () => client.get(`http://a411d570b6ec54034b20d92883abbb27-457135104.ap-northeast-2.elb.amazonaws.com/vendor/list`);
