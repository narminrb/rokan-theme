import { styled } from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  height: 455px;
  position: relative; 
  overflow: hidden;
  cursor: pointer;
`;

export const BlogImageContainer = styled.div`
  width: 100%;
  height: 187px;
  overflow: hidden;
  border-radius:20px;
  display:flex;
  align-items: center;
  justify-content: center;

  position: relative; 
  cursor: pointer;
`;

export const BlogPost = styled.h2`
  font-size: 20px;
  color: #333333;`;

export const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const BlogHoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
   &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

export const BlogBody = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const BlogDescription = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 400;
  color:#111111;
`;

export const BlogPrice = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const BlogDesc = styled.p`
  background-color:white;
  font-size: 1rem;
  font-weight: 500;
  color: black;
`;

export const BlogIconsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 180px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center; 
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: white;
  overflow: hidden;
  border-radius: 4px;

  i {
    flex: 1; 
    font-size: 1.3rem;
    font-weight: 300;
    color: black;
    cursor: pointer;
    text-align: center; 
    padding: 10px; 
  }

  i:hover {
    background-color: black;
    color: white; 
    transition: all 0.2s ease;
    border-radius: 4px; 
  }
`;


export const BlogImageContainerWithHover = styled(BlogImageContainer)`
  &:hover {
    ${BlogHoverImage} {
      opacity: 1;
    }
    ${BlogImage} {
      opacity: 0;
    }
    ${BlogIconsContainer} {
      opacity: 1;
    }
  }
`;
