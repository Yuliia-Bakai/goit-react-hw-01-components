import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  height: 80px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Label = styled.div`
width: 15px;
height: 15px;
margin-right: 15px;
border-radius: 50%;
  background-color: ${props => props.bgColor};
  }
`;

export const AvatarImg = styled.img`
  border-radius: 6px;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #555555;
`;