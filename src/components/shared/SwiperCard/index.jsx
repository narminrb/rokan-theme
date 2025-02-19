import React, { useState } from 'react'
import { SwiperBody, SwiperContainer, SwiperDescription, SwiperImage, SwiperImageContainerWithHover, SwiperPrice, SwiperHoverImage, IconsContainer } from '../../ui/SwiperCard'
import { useNavigate } from 'react-router-dom';
import './style.css'

const SwiperCard = ({ ImageSrc, HoverImageSrc, desc, price, slug, onSearchClick }) => {
    return (
      <SwiperContainer>
        <SwiperImageContainerWithHover>
          <SwiperImage src={ImageSrc} />
          <SwiperHoverImage src={HoverImageSrc} />
          <IconsContainer>
            <i className="ri-shopping-bag-4-line"></i>
            <i className="ri-heart-line"></i>
            <i className="ri-file-copy-line"></i>
            <i className="ri-search-line" onClick={onSearchClick}></i> {/* Trigger Modal on Search Icon Click */}
          </IconsContainer>
        </SwiperImageContainerWithHover>
        <SwiperBody>
          <SwiperDescription>{desc}</SwiperDescription>
          <SwiperPrice>{price}</SwiperPrice>
        </SwiperBody>
      </SwiperContainer>
    );
  };
  
  export default SwiperCard;
  
