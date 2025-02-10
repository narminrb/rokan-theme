import React from 'react'
import { InstaSwiperContainer, InstaSwiperImage, InstaSwiperImageContainerWithHover } from '../../ui/InstaSwiperCard'

const InstaSwiperCard = ({ ImageSrc,  }) => {
    return (
        <InstaSwiperContainer>
            <InstaSwiperImageContainerWithHover>
                <InstaSwiperImage src={ImageSrc} />
            </InstaSwiperImageContainerWithHover>
        </InstaSwiperContainer>
    )
}

export default InstaSwiperCard
