import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  -webkit-text-stroke: 2px white;
  max-width: 2000px;
  font-size: 100px;
  font-weight: 500;
  margin: 25px auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: -10px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;