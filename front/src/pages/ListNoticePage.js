import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import ListNoticeContainer from "../containers/notice/ListNoticeContainer";

const ListNoticePageBlock = styled(BasicDiv)`
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${OpenColor.gray[4]};
  border-radius: 40px;
  width: 100%;
`;

const ListNoticePage = () => {
  return (
    <ListNoticePageBlock>
      <ListNoticeContainer />
    </ListNoticePageBlock>
  );
};

export default ListNoticePage;
