import axios from "axios";

import qs from "qs";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.baseURL = `${process.env.REACT_APP_REVIEW}`;
const review_client = axios.create();

export const writeReview = ({ vendorid, title, body, writer}) => {
  console.log(`vendorid : ${vendorid}`);
  return review_client.post(`/review/register`, { vendorId: vendorid, title, body, writer }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readReview = (id) => review_client.get(`/review/${id}`);

export const reviewList = ({ page, vendorid }) => {
  const queryString = qs.stringify({
    page,
    vendorid,
  });
  return review_client.get(`/review/list?${queryString}`);
};

export const updateReview = ({ id, title, body, tags }) =>
  review_client.post(`/review/register`, { id, title, body, tags });

export const deleteReview = (id) => review_client.delete(`/review/${id}`);
