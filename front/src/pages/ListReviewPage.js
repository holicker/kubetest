import OpenColor from "open-color";
import React from "react";
import styled from "styled-components";
import BasicButton from "../components/common/BasicButton";
import { BasicDiv } from "../components/common/BasicDiv";
import ListReviewMapContainer from "../containers/map/review/ListReviewMapContainer";

const ListReviewPageBlock = styled(BasicDiv)`
  margin: 0px 5px;
  background-color: ${OpenColor.blue[1]};
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ListReviewPage = ({match}) => {
  return (
    <ListReviewPageBlock>
        
      <BasicButton to={match.url + "/write"}>리뷰 작성</BasicButton>
      <ListReviewMapContainer />
    </ListReviewPageBlock>
  );
};

export default ListReviewPage;
