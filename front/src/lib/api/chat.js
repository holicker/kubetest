import client from "./client";

export const checkChat = ({
  merchandiseid,
  buyernickname,
  buyerid,
  vendordomain,
}) =>
  client.post(`${process.env.CHAT}/chatroom/check`, {
    buyerId: buyerid,
    merchandiseId: merchandiseid,
    buyerNickname: buyernickname,
    vendorDomain: vendordomain,
  });

export const infoChat = (roomid) => client.get(`${process.env.CHAT}/chatroom/room/${roomid}`);

export const listChatBuyer = ({ id }) =>
  client.get(`${process.env.CHAT}/chatroom/buyerlist/${id}`);

export const listChatSeller = ({ id }) =>
  client.get(`${process.env.CHAT}/chatroom/sellerlist/${id}`);
