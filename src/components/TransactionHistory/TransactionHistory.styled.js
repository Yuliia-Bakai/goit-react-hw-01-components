import styled from '@emotion/styled';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 600px;
  text-align: center;
  border-collapse: collapse;
  th,
  td {
    padding: 10px;
    height: 20px;
  }
  th {
    width: 33.33%;
    border: 1px solid #e7fefc;
  }
`;

export const Thead = styled.thead`
  color: #e7fefc;
  background: #00bcd5;
`;

export const Tr = styled.tr`
  :nth-child(odd) {
    background: #ecf1f4;
  }
  td {
    border: 1px solid #f4f4f4;
  }
`;