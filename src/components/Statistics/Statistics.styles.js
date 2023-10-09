import { styled } from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 450px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgb(0 40 255) 0 0px 20px 2px;
  background-color: #9d2300;
`;

export const Title = styled.h2`
  padding: 15px 0;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #7aff77;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #b0c4de;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  width: 20%;
  &:not(:last-child) {
    border-right: 1px solid #778899;
  }
  border-top: 1px solid #778899;
`;

export const Label = styled.p`
  margin-bottom: 7px;
  font-size: 16px;
`;

export const Percentage = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
`;
