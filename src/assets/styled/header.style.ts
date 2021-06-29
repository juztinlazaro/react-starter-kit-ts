import styled from 'styled-components';
import { snow } from './colors';

export const HeaderSection = styled.div`
  display: flex;
  padding: 20px 40px;
`;

export const HeaderItem  = styled.div`
  width: 50%;

  &:last-child {
    text-align: right;
  }
`;

export const HeaderTitle  = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

export const LinkItem  = styled.span`
  a {
    margin-right: 20px;
    display: inline-block;
    color: ${snow};
   }
`;