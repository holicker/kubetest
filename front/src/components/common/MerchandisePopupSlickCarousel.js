import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

const MerchandisePopupSlickCarouselBlock = styled(BasicDiv)`
  display: absolute;
  height: 50%;
  width: 80%;
`;

const MerchandisePopupSlickCarouselItem = styled(BasicDiv)`
  display: absolute;
  height: 50%;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Image = styled.img`
  display: block;
  margin: 0px auto;
  border-radius: 10px;
  width: 100%;
  max-width: 20rem;
  height: 100%;
  max-height: 12rem;
  object-fit: cover;
`;

const MerchandisePopupSlickCarousel = ({ type, images }) => {
  return (
    <MerchandisePopupSlickCarouselBlock>
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <MerchandisePopupSlickCarouselItem key={image.id}>
              {type === "merchandise" && (
                <Image
                  src={`${process.env.VENDOR}/vendor/${type}image/${image.id}`}
                />
              )}
            </MerchandisePopupSlickCarouselItem>
          ))}
      </Slider>
    </MerchandisePopupSlickCarouselBlock>
  );
};

export default MerchandisePopupSlickCarousel;
