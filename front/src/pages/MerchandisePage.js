import React, { useState } from "react";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import ListMerchandiseContainer from "../containers/merchandise/ListMerchandiseContainer";
import RegisterMerchandisePage from "./RegisterMerchandisePage";
const MerchandisePageBlock = styled(BasicDiv)`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
  width: 100%;
`;
const MerchandisePageWrapper = styled(Responsive)`
  display: flex;
  justify-content: center;
  height: 80%;
  max-height: 100vh;
  width: 80%;
`;

const MerchandisePageItem = styled(BasicItem)`
  &.left {
    display: flex;
    flex: 1;
    overflow: auto;
  }

  &.right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 0.85;
  }

  &.write {
    display: ${(props) => (props.writeView ? "flex" : "none")};
  }
  &.merchandise {
    display: ${(props) => (props.merchandiseView ? "flex" : "none")};
  }
`;
const MerchandisePage = ({ match, history }) => {
  const [writeView, setWriteView] = useState(false);

  const writeToggle = () => {
    setWriteView(!writeView);
  };

  return (
    <MerchandisePageBlock>
      <MerchandisePageWrapper>
        <MerchandisePageItem className="left">
          <ListMerchandiseContainer writeToggle={writeToggle} />
        </MerchandisePageItem>
        <MerchandisePageItem className="right write" writeView={writeView}>
          <RegisterMerchandisePage writeToggle={writeToggle} />
        </MerchandisePageItem>
      </MerchandisePageWrapper>
    </MerchandisePageBlock>
  );
};

export default MerchandisePage;
