import axios from "axios";

import qs from "qs";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.baseURL = `${process.env.REACT_APP_NOTICE}`;
const notice_client = axios.create();

export const writeNotice = ({ title, body }) => {
  console.log(`writeAPI title : ${title}, body : ${body}`);
  return notice_client.post(`/notice/register`, { title, body }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readNotice = (id) => notice_client.get(`/notice/${id}`);

export const noticeList = ({ page, writer,}) => {
  const queryString = qs.stringify({
    page,
    writer,
  });
  return notice_client.get(`/notice/list`);
  //return notice_client.get(`/notice/list?${queryString}`);
};

export const updateNotice = ({ id, title, body, tags }) =>
  notice_client.post(`/notice/register`, { id, title, body, tags });

export const deleteNotice = (id) => notice_client.delete(`/notice/${id}`);
