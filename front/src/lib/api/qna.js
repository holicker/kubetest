import client from "./client";
import qs from "qs";

export const writeQna = ({ vendorid, title, body, writer }) => {
  console.log(`vendorid : ${vendorid}`);
  return client.post(`${process.env.QNA}/qna/register`, { vendorId: vendorid, title, body, writer }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readQna = (id) => client.get(`${process.env.QNA}/qna/${id}`);

export const qnalist = ({ page, vendorid }) => {
  const queryString = qs.stringify({
    page,
    vendorid,
  });
  return client.get(`${process.env.QNA}/qna/list?${queryString}`);
};

export const updateQna = ({ id, title, body, tags }) =>
  client.post(`${process.env.QNA}/qna/register`, { id, title, body, tags });

export const deleteQna = (id) => client.delete(`${process.env.QNA}/qna/${id}`);
