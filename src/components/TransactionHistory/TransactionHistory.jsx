import React from 'react';
import { TableContainer, TableHead, TableTitle, TableItem, TableData } from './TransactionHistory.styles';

const TransactionHistory = ( {items} ) => {
  return (
    <TableContainer>
      <thead>
        <TableHead>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </TableHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency}) => (
          <TableItem key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableItem>
        ))}
      </tbody>
    </TableContainer>
  )
}

export default TransactionHistory
