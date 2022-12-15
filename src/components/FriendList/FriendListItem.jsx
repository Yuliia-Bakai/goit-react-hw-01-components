import { AvatarImg, Name, Label, Friend } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <Friend>
      <Label bgColor={isOnline ? '#52ad56' : '#ff4b58'}></Label>
      <AvatarImg alt={name} src={avatar} width="60" height="60" />
      <Name> {name}</Name>
    </Friend>
  );
};