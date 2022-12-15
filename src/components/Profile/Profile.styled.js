import styled from '@emotion/styled';

export const ProfileStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 300px;
  color: #555555;
  // border: 1px solid red;
  border-radius: 6px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Description = styled.div`
  padding: 30px;
  // border: 1px solid orange;
  text-align: center;
`;

export const AvatarEl = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  border-radius: 50%;
  border: 1px solid grey;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f3f6f9;
  li {
    width: 33.33%;
    border: 1px solid #e9eef3;
    padding: 10px;
  }
`;

export const Tag = styled.p``;

export const Location = styled.p``;

export const Label = styled.span`
  display: block;
  text-align: center;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
`;