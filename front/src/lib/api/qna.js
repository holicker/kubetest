import axios from "axios";

import qs from "qs";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.baseURL = `${process.env.REACT_APP_QNA}`;
const qna_client = axios.create();

export const writeQna = ({ vendorid, title, body, writer }) => {
  console.log(`vendorid : ${vendorid}`);
  return qna_client.post(`/qna/register`, { vendorId: vendorid, title, body, writer }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readQna = (id) => qna_client.get(`/qna/${id}`);

export const qnalist = ({ page, vendorid }) => {
  const queryString = qs.stringify({
    page,
    vendorid,
  });
  return qna_client.get(`/qna/list?${queryString}`);
};

export const updateQna = ({ id, title, body, tags }) =>
  qna_client.post(`/qna/register`, { id, title, body, tags });

export const deleteQna = (id) => qna_client.delete(`/qna/${id}`);
