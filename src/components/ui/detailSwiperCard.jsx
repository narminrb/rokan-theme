import { styled } from "styled-components";

export const DetailSwiperContainer = styled.div`
  width: 100%;
  height: 315px;
  position: relative; 
  overflow: hidden;
`;

export const DetailSwiperImageContainer = styled.div`
  width: 100%;
  height: 245px;
  border-radius:20px;
  overflow: hidden;
  display:flex;
  align-items: center;
  justify-content: center;
  position: relative; 
`;

export const DetailSwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
   &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;


export const DetailSwiperBody = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DetailSwiperDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  color:#111111;
`;

export const DetailSwiperDesc = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

