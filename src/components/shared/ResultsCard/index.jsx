import React from 'react'
import { SwiperBody, SwiperContainer, SwiperImage, SwiperImageContainerWithHover, SwiperPrice, SwiperHoverImage, IconsContainer, SwiperDesc } from '../../ui/SwiperCard'

const ResultsCard = ({ ImageSrc, HoverImageSrc, title, price }) => {
    return (
        <SwiperContainer>
            <SwiperImageContainerWithHover>
                <SwiperImage src={ImageSrc} />
                <SwiperHoverImage src={HoverImageSrc} />
                <IconsContainer>
                    <i className="ri-shopping-bag-4-line"></i>
                    <i className="ri-heart-line"></i>
                    <i className="ri-file-copy-line"></i>
                    <i className="ri-search-line"></i>
                </IconsContainer>
            </SwiperImageContainerWithHover>
            <SwiperBody>
                <SwiperDesc>
                    {title}
                </SwiperDesc>
                <SwiperPrice>
                    {price}
                </SwiperPrice>
            </SwiperBody>
        </SwiperContainer>
    )
}

export default ResultsCard
