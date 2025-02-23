import React from 'react';
import styled from 'styled-components';

export interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  onClose
}) => {
  return (
    <StyledAlert type={type}>
      <AlertContent>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertMessage>{message}</AlertMessage>
      </AlertContent>
      {onClose && (
        <CloseButton onClick={onClose}>×</CloseButton>
      )}
    </StyledAlert>
  );
};

const StyledAlert = styled.div<{ type: string }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  margin: 8px 0;

  ${props => {
    const types = {
      info: `
        background-color: #EFF6FF;
        border-left: 4px solid #2563EB;
      `,
      success: `
        background-color: #ECFDF5;
        border-left: 4px solid #059669;
      `,
      warning: `
        background-color: #FFFBEB;
        border-left: 4px solid #D97706;
      `,
      error: `
        background-color: #FEF2F2;
        border-left: 4px solid #DC2626;
      `
    };
    return types[props.type as keyof typeof types];
  }}
`;

const AlertContent = styled.div`
  flex: 1;
`;

const AlertTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

const AlertMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #4B5563;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  padding: 0 4px;
  cursor: pointer;
  color: #6B7280;
  margin-left: 16px;

  &:hover {
    color: #111827;
  }
`;

export default Alert;