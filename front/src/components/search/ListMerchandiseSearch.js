import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import { LinkButton } from "../common/LinkButton";
import OpenColor from "open-color";
const ListMerchandiseSearchBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;

  h5 {
    text-align: center;
    color: ${OpenColor.gray[7]};
  }
`;

const ListMerchandiseSearchItem = styled.div`
  margin: 1rem 1rem;
  height: 9rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

const ListMerchandiseComponent = styled(BasicItem)`
  &.photo {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 7;
  }
  &.title {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &.info {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &.desc {
    grid-column-start: 4;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 8;
  }
`;

const MerchandiseItem = ({ ...props }) => {
  return (
    <ListMerchandiseSearchItem>
      <ListMerchandiseComponent className="photo">
        사진
      </ListMerchandiseComponent>
      <ListMerchandiseComponent className="title">
        <LinkButton {...props}>상품 제목1</LinkButton>
      </ListMerchandiseComponent>
      <ListMerchandiseComponent className="info">
        가격 및 정보
      </ListMerchandiseComponent>
      <ListMerchandiseComponent className="desc">내용</ListMerchandiseComponent>
    </ListMerchandiseSearchItem>
  );
};

const ListMerchandiseSearch = ({ list }) => {
  return (
    <ListMerchandiseSearchBlock>
      <h5>검색 결과가 없습니다.</h5>
    </ListMerchandiseSearchBlock>
  );
};

export default ListMerchandiseSearch;
