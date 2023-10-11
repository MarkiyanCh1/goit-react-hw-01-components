import React from 'react';
import { List } from './FriendList.styles';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};

export default FriendList;
