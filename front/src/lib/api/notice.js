import client from "./client";
import qs from "qs";

export const writeNotice = ({ title, body }) => {
  console.log(`writeAPI title : ${title}, body : ${body}`);
  return client.post("http://a76bb62639ca343438e2fe6238f0ec57-460041296.ap-northeast-2.elb.amazonaws.com/notice/register", { title, body }); // 이렇게 된 경우에는 return을 꼭 넣어줘야 한다!!
};

export const readNotice = (id) => client.get(`http://a76bb62639ca343438e2fe6238f0ec57-460041296.ap-northeast-2.elb.amazonaws.com/notice/${id}`);

export const noticeList = ({ page, writer,}) => {
  const queryString = qs.stringify({
    page,
    writer,
  });
  return client.get(`http://a76bb62639ca343438e2fe6238f0ec57-460041296.ap-northeast-2.elb.amazonaws.com/notice/list`);
  //return client.get(`/notice/list?${queryString}`);
};

export const updateNotice = ({ id, title, body, tags }) =>
  client.post("http://a76bb62639ca343438e2fe6238f0ec57-460041296.ap-northeast-2.elb.amazonaws.com/notice/register", { id, title, body, tags });

export const deleteNotice = (id) => client.delete(`http://a76bb62639ca343438e2fe6238f0ec57-460041296.ap-northeast-2.elb.amazonaws.com/notice/${id}`);
