import React from 'react'
import { LikesBody, LikesContainer, LikesDescription, LikesImage, LikesImageContainer } from '../../ui/LikesCard'

const LikesCard = ({ ImageSrc, title }) => {
    return (
        <LikesContainer>
            <LikesImageContainer>
                <LikesImage src={ImageSrc} />
            </LikesImageContainer>
            <LikesBody>
                <LikesDescription>
                    {title}
                </LikesDescription>
            </LikesBody>
        </LikesContainer>
    )
}

export default LikesCard