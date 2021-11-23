import client from "./client";
import qs from "qs";

export const writeQna = ({ vendorid, title, body, writer }) => {
  console.log(`vendorid : ${vendorid}`);
  return client.post("http://a292b8f5598914a8cb689453dd78baac-928562277.ap-northeast-2.elb.amazonaws.com/qna/register", { vendorId: vendorid, title, body, writer }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readQna = (id) => client.get(`http://a292b8f5598914a8cb689453dd78baac-928562277.ap-northeast-2.elb.amazonaws.com/qna/${id}`);

export const qnalist = ({ page, vendorid }) => {
  const queryString = qs.stringify({
    page,
    vendorid,
  });
  return client.get(`http://a292b8f5598914a8cb689453dd78baac-928562277.ap-northeast-2.elb.amazonaws.com/qna/list?${queryString}`);
};

export const updateQna = ({ id, title, body, tags }) =>
  client.post("http://a292b8f5598914a8cb689453dd78baac-928562277.ap-northeast-2.elb.amazonaws.com/qna/register", { id, title, body, tags });

export const deleteQna = (id) => client.delete(`http://a292b8f5598914a8cb689453dd78baac-928562277.ap-northeast-2.elb.amazonaws.com/qna/${id}`);
