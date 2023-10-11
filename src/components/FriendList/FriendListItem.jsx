import { ListItem, Status, Avatar, Name } from './FriendList.styles';


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem style={{ boxShadow: isOnline ? "rgb(0 255 16) 0 0px 20px 2px" : "rgb(255 13 0) 0 0px 20px 2px" }}>
          <Status style={{
              color: isOnline ? "green" : "red",
            }}>
            &#9679;
          </Status>
          <Avatar src={avatar}/>
          <Name>{name}</Name>
        </ListItem>
  )
}

export default FriendListItem
