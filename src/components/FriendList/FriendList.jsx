import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListStyle } from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <FriendListStyle>
      {friendList.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        ></FriendListItem>
      ))}
    </FriendListStyle>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};