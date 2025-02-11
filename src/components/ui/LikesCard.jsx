import { styled } from "styled-components";

export const LikesContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative; 
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LikesImageContainer = styled.div`
  width: 220px;
  border-radius:100%;
  height: 220px;
  overflow: hidden;
  position: relative; 
`;

export const LikesImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const LikesDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding: 8px 12px;
  display: inline-block;
`;

export const LikesBody = styled.div`
  padding: 12px 0px;
`;
export const LikesText = styled.p`
  position: absolute;
  bottom: 20px; 
  left: 20px; 
  font-size: 1rem;
  font-weight: 400;
  color: white;
  padding: 8px 12px;
  display: inline-block;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px; 
    background-color: white; 
    margin-top: 1px; 
  }
`;
