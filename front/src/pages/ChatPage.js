import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Chat from "../lib/chat/Chat";
import { infoChat } from "../modules/chat";

const ChatPageBlock = styled.div`
  display: flex;
  height: 500px;
  background-color: white;
  justify-content: center;
`;

const ChatPage = ({ match }) => {
  const { nickname, roomname } = useSelector(({ user, chat }) => ({
    nickname: user.nickname,
    roomname: chat.roomname,
  }));
  const { roomid } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(infoChat(roomid));
  }, [dispatch]);

  useEffect(() => {}, []);

  return (
    <ChatPageBlock>
      <Chat nickname={nickname} roomid={roomid} roomname={roomname} />
    </ChatPageBlock>
  );
};

export default ChatPage;
