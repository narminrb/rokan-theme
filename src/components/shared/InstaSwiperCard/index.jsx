import React from 'react'
import { InstaIcon,  InstaSwiperImage, InstaSwiperImageContainerWithHover, Overlay } from '../../ui/InstaSwiperCard'

const InstaSwiperCard = ({ ImageSrc,  }) => {
    return (
        <InstaSwiperImageContainerWithHover>
        <InstaSwiperImage src={ImageSrc} alt="Instagram Image" />
        <Overlay>
          <InstaIcon>
          <i class="ri-instagram-line"></i>
            </InstaIcon>
        </Overlay>
      </InstaSwiperImageContainerWithHover>
    )
}

export default InstaSwiperCard
