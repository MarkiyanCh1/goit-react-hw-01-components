import React from 'react';
import {
  Card,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styles';
import { colors } from 'randomColors';

const Statistics = ({ title, stats }) => {
  return (
    <Card>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{
              backgroundColor: colors[(Math.random() * colors.length) ^ 0],
            }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Card>
  );
};

export default Statistics;
