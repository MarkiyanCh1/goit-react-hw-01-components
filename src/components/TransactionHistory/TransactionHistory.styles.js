import { styled } from 'styled-components';

export const TableContainer = styled.table`
  overflow: hidden;
  width: 450px;
  margin: 40px auto;
  border-radius: 20px;
  box-shadow: rgb(255 160 0) 0 0px 20px 2px;
  border: 1px solid #d3d3d3;
  background: #68aedb;
`;

export const TableHead  = styled.tr`
  justify-content: center;
  width: 450px;
  background-color: #15d798;
  color: #1b23d5;
`;

export const TableTitle  = styled.th`
  padding: 18px 28px 18px;
  text-align: center;
`;

export const TableItem  = styled.tr`
background-color: #af58ed;
  &:nth-child(2n) {
    background-color: #e4c2c8;
  }
`;

export const TableData = styled.td`
  padding: 18px 28px 18px;
  text-align: center;
`;
