import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const ListItem = styled.li`
  width: 274px;
  height: 426px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 268px;
`;

export const FavBtn = styled.button`
  position: absolute;
  background-color: transparent;
  top: 14px;
  right: 14px;
  border: none;
`;

export const Icon = styled(ReactSVG)``;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: var(--primary-black);
`;

export const SpanTitle = styled.span`
  color: var(--accent-blue);
`;

export const Price = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: var(--primary-black);
`;

export const ListItemDescription = styled.p`
  font-size: 12px;
  line-height: calc(18 / 12);
  color: var(--secondary-grey);
`;

export const BtnLearnMore = styled.button`
  color: var(--white);
  width: 274px;
  height: 44px;
  border-radius: 12px;
  padding: 12px 99.5px;
  background-color: var(--accent-blue);
  border: 0;
  transition: all var(--transition-duration);

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
  }
`;
