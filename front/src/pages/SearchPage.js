import React from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import ListMerchandiseSearchContainer from "../containers/search/ListMerchandiseSearchContainer";
const SearchPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const SearchPageWrapper = styled(Responsive)``;

const SearchPageItem = styled(BasicItem)``;

const SearchPage = ({ match }) => {
  return (
    <SearchPageBlock>
      <SearchPageWrapper>
        <ListMerchandiseSearchContainer />
      </SearchPageWrapper>
    </SearchPageBlock>
  );
};

export default SearchPage;
