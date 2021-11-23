import axios from "axios";


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.baseURL = `${process.env.REACT_APP_CHAT}`;
const chat_client = axios.create();

export const checkChat = ({
  merchandiseid,
  buyernickname,
  buyerid,
  vendordomain,
}) =>
  chat_client.post(`/chatroom/check`, {
    buyerId: buyerid,
    merchandiseId: merchandiseid,
    buyerNickname: buyernickname,
    vendorDomain: vendordomain,
  });

export const infoChat = (roomid) => chat_client.get(`/chatroom/room/${roomid}`);

export const listChatBuyer = ({ id }) =>
  chat_client.get(`/chatroom/buyerlist/${id}`);

export const listChatSeller = ({ id }) =>
  chat_client.get(`/chatroom/sellerlist/${id}`);
