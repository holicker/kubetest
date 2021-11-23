import client from "./client";

export const checkChat = ({
  merchandiseid,
  buyernickname,
  buyerid,
  vendordomain,
}) =>
  client.post("http://ac06b71d8fb3a4cf6acc2a2557e98d86-1967271677.ap-northeast-2.elb.amazonaws.com/chatroom/check", {
    buyerId: buyerid,
    merchandiseId: merchandiseid,
    buyerNickname: buyernickname,
    vendorDomain: vendordomain,
  });

export const infoChat = (roomid) => client.get(`http://ac06b71d8fb3a4cf6acc2a2557e98d86-1967271677.ap-northeast-2.elb.amazonaws.com/chatroom/room/${roomid}`);

export const listChatBuyer = ({ id }) =>
  client.get(`http://ac06b71d8fb3a4cf6acc2a2557e98d86-1967271677.ap-northeast-2.elb.amazonaws.com/chatroom/buyerlist/${id}`);

export const listChatSeller = ({ id }) =>
  client.get(`http://ac06b71d8fb3a4cf6acc2a2557e98d86-1967271677.ap-northeast-2.elb.amazonaws.com/chatroom/sellerlist/${id}`);
