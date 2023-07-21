import styled from '@emotion/styled';

const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
  padding: 10px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-weight: 700;
`;
const IconBox = styled.div`
  color: blue;
`;

const Text = styled.span`
  margin-left: 10px;
`;
export { Item, Link, IconBox, Text };
