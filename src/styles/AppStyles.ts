import styled from 'styled-components';

export const AppContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  height: 50%;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #8884d8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonsContainer = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  /* background-color: aliceblue; */
  `;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
`;

export const StyledImage = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 20px;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #8884d8;
  padding: 20px;
  color: white;
  position: fixed;
  bottom: 0;
`;

export const Heart = styled.span`
  color: white;
  margin-left: 10px;
  &::before {
    content: '♥';
  }
`;