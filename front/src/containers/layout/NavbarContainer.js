import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import Navbar from "../../components/layout/Navbar";
import AskMakeModal from "../../components/vendor/AskMakeModal";
import { changeKeyword } from "../../modules/search";

const NavbarContainer = ({ history, location }) => {
  const { keyword, vendorid, vendordomain } = useSelector(
    ({ search, user, vendor }) => ({
      keyword: search.keyword,
      vendorid: vendor.vendorid,
      vendordomain: vendor.vendordomain,
    })
  );

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const onChangeKeyword = (e) => {
    const { value } = e.target;
    dispatch(
      changeKeyword({
        keyword: value,
      })
    );
  };

  const onFindMyVendor = () => {
    if (vendorid === -1) {
      setModal(true);
    } else {
      history.push(`/map/${vendordomain}`);
    }
  };

  const onFindMyVendor2 = () => {
    if (vendorid === -1) {
      setModal(true);
    } else {
      history.push(`/merchandise`);
    }
  };

  const onConfirm = () => {
    setModal(false);
    history.push(`/vendor`);
  };
  const onCancel = () => {
    setModal(false);
  };

  return (
    <>
      <Navbar
        keyword={keyword}
        onChangeKeyword={onChangeKeyword}
        onFindMyVendor={onFindMyVendor}
        onFindMyVendor2={onFindMyVendor2}
      />
      <AskMakeModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

export default withRouter(NavbarContainer);
