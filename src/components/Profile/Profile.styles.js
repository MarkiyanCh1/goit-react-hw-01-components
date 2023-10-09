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
  box-shadow: rgb(255 0 0) 0 0px 20px 2px;
  background-color: #b0c4de;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 450px;
  margin: 0 auto;
  background-color: #b7e7b4;
  height: auto;
`;

export const Avatar = styled.img`
  margin-bottom: 30px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;;
  background-color: blue;
`;

export const Name = styled.p`
  margin-bottom: 8px;
  font-size: 24px;
`;

export const Tag = styled.p`
  margin-bottom: 8px;
  font-size: 15px;
`;

export const Location = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  width: 33.33%;
  &:not(:last-child) {
    border-right: 1px solid #778899;
  }
  border-top: 1px solid #778899;
`;

export const Label = styled.span`
  color: #2288ed;
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;

export const Quantity = styled.span`
  color: #003cd6;
  font-weight: 600;
  font-size: 18px;
`;
