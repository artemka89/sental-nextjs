'use client';
import styled from 'styled-components';

export const UserDetailWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const DetailsInfo = styled.div`
  font-size: 16px;
  color: hsl(0 0% 60%);
  & span {
    margin-left: 10px;
    color: hsl(0 0% 82%);
    font-weight: 500;
  }
  @media (max-width: 440px) {
    font-size: 14px;
  }
`;
