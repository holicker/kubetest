import client from "./client";
import qs from "qs";

export const writeReview = ({ vendorid, title, body, writer}) => {
  console.log(`vendorid : ${vendorid}`);
  return client.post("http://a3bcc741d9b25487b958846839c3fd49-1025095754.ap-northeast-2.elb.amazonaws.com/review/register", { vendorId: vendorid, title, body, writer }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readReview = (id) => client.get(`http://a3bcc741d9b25487b958846839c3fd49-1025095754.ap-northeast-2.elb.amazonaws.com/review/${id}`);

export const reviewList = ({ page, vendorid }) => {
  const queryString = qs.stringify({
    page,
    vendorid,
  });
  return client.get(`http://a3bcc741d9b25487b958846839c3fd49-1025095754.ap-northeast-2.elb.amazonaws.com/review/list?${queryString}`);
};

export const updateReview = ({ id, title, body, tags }) =>
  client.post("http://a3bcc741d9b25487b958846839c3fd49-1025095754.ap-northeast-2.elb.amazonaws.com/review/register", { id, title, body, tags });

export const deleteReview = (id) => client.delete(`http://a3bcc741d9b25487b958846839c3fd49-1025095754.ap-northeast-2.elb.amazonaws.com/review/${id}`);
