import styled from 'styled-components';

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnLoadMore = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: var(--accent-blue);
  transition: all var(--transition-duration);
  background-color: transparent;
  border: 0;
  text-decoration: underline;

  &:hover,
  &:focus {
    color: var(--hover-blue);
  }
`;
