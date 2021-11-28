import qs from "qs";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import VendorMap from "../../components/map/VendorMap";
import {
  changeVendorField,
  getByVendordomain,
  initializeVendorListAndVisit,
  listVendor
} from "../../modules/vendor";
import { initialize } from "../../modules/write";

const VendorMapContainer = ({ location, match }) => {
  const {
    userid,
    vendorid,
    vendor,
    vendorlist,
    reviewlist,
    qnalist,
  } = useSelector(({ user, vendor, reviewlist, qnalist }) => ({
    userid: user.id,
    vendorid: vendor.visit ? vendor.visit.id : null,
    vendorlist: vendor.vendorlist,
    vendor: vendor.visit,
    reviewlist: reviewlist.reviewlist,
    qnalist: qnalist.qnalist,
  }));

  let { page } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { domain } = match.params;
  const dispatch = useDispatch();

  const owner = vendor ? vendor.userId === parseInt(userid) : false;
  console.log(`owner => ${owner}`);
  // eslint-disable-next-line no-unused-vars
  const [lng, setLng] = useState("126.988205");
  // eslint-disable-next-line no-unused-vars
  const [lat, setLat] = useState("37.551229");
  const [viewType, setViewType] = useState("merchandise");

  const onChangeField = useCallback(
    (payload) => dispatch(changeVendorField(payload)),
    [dispatch]
  );

  const onMarkerClick = useCallback(
    (vendordomain) => {
      dispatch(getByVendordomain(vendordomain));
    },
    [dispatch]
  );

  const onMenuClick = (type) => {
    dispatch(initialize());
    setViewType(type);
  };

  useEffect(() => {
    dispatch(listVendor());
    if (domain) dispatch(getByVendordomain(domain));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    return dispatch(initializeVendorListAndVisit());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VendorMap
      vendorlist={vendorlist}
      onChangeField={onChangeField}
      onMarkerClick={onMarkerClick}
      vendor={vendor}
      onMenuClick={onMenuClick}
      viewType={viewType}
      lng={lng}
      lat={lat}
      page={page}
      vendorid={vendorid}
      reviewlist={reviewlist}
      qnalist={qnalist}
      owner={owner}
    />
  );
};

export default withRouter(VendorMapContainer);
