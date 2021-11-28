import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../components/common/BasicButton";
import { BasicDiv } from "../components/common/BasicDiv";
import ListQnaMapContainer from "../containers/map/qna/ListQnaMapContainer";
const ListQnaPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const ListQnaPage = ({match}) => {
  return (
    <ListQnaPageBlock>
        
      <BasicButton to={match.url + "/write"}>질문 작성</BasicButton>
      <ListQnaMapContainer />
    </ListQnaPageBlock>
  );
};

export default ListQnaPage;
