import React from 'react'
import { DiscoverBody, DiscoverContainer, DiscoverDescription, DiscoverImage, DiscoverImageContainer, DiscoverText } from '../../ui/DiscoverNow'

const DiscoverCard = ({ ImageSrc, title,desc }) => {
    return (
        <DiscoverContainer>
            <DiscoverImageContainer>
                <DiscoverImage src={ImageSrc} />
            </DiscoverImageContainer>
            <DiscoverBody>
                <DiscoverDescription>
                    {title}
                </DiscoverDescription>
                <DiscoverText>
                    {desc}
                </DiscoverText>
            </DiscoverBody>
        </DiscoverContainer>
    )
}

export default DiscoverCard