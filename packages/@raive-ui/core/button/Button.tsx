import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  rounded = false,
  startIcon,
  endIcon,
  loading = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      rounded={rounded}
      onClick={onClick}
    >
      {loading && <LoadingSpinner />}
      {!loading && startIcon && <IconWrapper>{startIcon}</IconWrapper>}
      <span>{children}</span>
      {!loading && endIcon && <IconWrapper>{endIcon}</IconWrapper>}
    </StyledButton>
  );
};

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0 6px;
`;

const StyledButton = styled.button<ButtonProps>`
  ${props => props.fullWidth ? 'width: 100%;' : ''}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${props => props.rounded ? '9999px' : '8px'};
  font-weight: 500;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  position: relative;
  overflow: hidden;

  ${props => {
    switch (props.size) {
      case 'small':
        return 'padding: 8px 16px; font-size: 14px;';
      case 'large':
        return 'padding: 16px 28px; font-size: 18px;';
      default:
        return 'padding: 12px 24px; font-size: 16px;';
    }
  }}

  ${props => {
    const variants = {
      primary: `
        background: linear-gradient(145deg, #3B82F6, #2563EB);
        color: white;
        &:hover:not(:disabled) { 
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
      `,
      secondary: `
        background: #F3F4F6;
        color: #1F2937;
        &:hover:not(:disabled) { background: #E5E7EB; }
      `,
      outline: `
        background: transparent;
        border: 2px solid #3B82F6;
        color: #3B82F6;
        &:hover:not(:disabled) { 
          background: #EFF6FF;
          border-color: #2563EB;
        }
      `,
      ghost: `
        background: transparent;
        color: #3B82F6;
        &:hover:not(:disabled) { background: #EFF6FF; }
      `,
      danger: `
        background: linear-gradient(145deg, #EF4444, #DC2626);
        color: white;
        &:hover:not(:disabled) { 
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
        }
      `,
      success: `
        background: linear-gradient(145deg, #10B981, #059669);
        color: white;
        &:hover:not(:disabled) { 
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.2);
        }
      `
    };
    return variants[props.variant || 'primary'];
  }}

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export default Button;