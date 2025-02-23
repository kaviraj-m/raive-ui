import React from 'react';
import styled from 'styled-components';

export interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'medium',
  rounded = false,
  children
}) => {
  return (
    <StyledBadge
      variant={variant}
      size={size}
      rounded={rounded}
    >
      {children}
    </StyledBadge>
  );
};

const StyledBadge = styled.span<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: ${props => props.rounded ? '9999px' : '6px'};

  ${props => {
    const sizes = {
      small: 'padding: 2px 8px; font-size: 12px;',
      medium: 'padding: 4px 12px; font-size: 14px;',
      large: 'padding: 6px 16px; font-size: 16px;'
    };
    return sizes[props.size || 'medium'];
  }}

  ${props => {
    const variants = {
      primary: 'background: #EFF6FF; color: #2563EB;',
      success: 'background: #ECFDF5; color: #059669;',
      warning: 'background: #FFFBEB; color: #D97706;',
      danger: 'background: #FEF2F2; color: #DC2626;',
      info: 'background: #F3F4F6; color: #4B5563;'
    };
    return variants[props.variant || 'primary'];
  }}
`;

export default Badge;