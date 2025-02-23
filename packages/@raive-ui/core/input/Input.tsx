import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'underlined';
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  fullWidth = false,
  variant = 'outlined',
  helperText,
  startIcon,
  endIcon,
  disabled,
  ...props
}, ref) => {
  return (
    <InputWrapper $fullWidth={fullWidth}>
      {label && <Label $disabled={disabled}>{label}</Label>}
      <InputContainer>
        {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
        <StyledInput
          ref={ref}
          $variant={variant}
          $hasError={!!error}
          $fullWidth={fullWidth}
          $hasStartIcon={!!startIcon}
          $hasEndIcon={!!endIcon}
          disabled={disabled}
          {...props}
        />
        {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
      </InputContainer>
      {(error || helperText) && (
        <HelperText $hasError={!!error}>
          {error || helperText}
        </HelperText>
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

const InputWrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  min-width: 200px;
`;

const Label = styled.label<{ $disabled?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.$disabled ? '#9CA3AF' : '#374151'};
  margin-bottom: 6px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B7280;
  z-index: 1;
  
  &:first-child {
    left: 12px;
  }
  
  &:last-child {
    right: 12px;
  }
`;

const StyledInput = styled.input<{
  $hasError?: boolean;
  $fullWidth?: boolean;
  $variant?: string;
  $hasStartIcon?: boolean;
  $hasEndIcon?: boolean;
}>`
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 16px;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  transition: all 0.2s ease;
  padding-left: ${props => props.$hasStartIcon ? '40px' : '14px'};
  padding-right: ${props => props.$hasEndIcon ? '40px' : '14px'};
  background-color: ${props => props.disabled ? '#F3F4F6' : 'white'};

  ${props => {
    switch (props.$variant) {
      case 'filled':
        return `
          border: 1px solid transparent;
          background-color: ${props.disabled ? '#F3F4F6' : '#F9FAFB'};
          &:focus {
            background-color: white;
            border-color: ${props.$hasError ? '#EF4444' : '#3B82F6'};
            box-shadow: 0 0 0 3px ${props.$hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
          }
        `;
      case 'underlined':
        return `
          border: none;
          border-bottom: 2px solid ${props.$hasError ? '#EF4444' : '#E5E7EB'};
          border-radius: 0;
          padding-left: ${props.$hasStartIcon ? '40px' : '0'};
          padding-right: ${props.$hasEndIcon ? '40px' : '0'};
          &:focus {
            border-bottom-color: ${props.$hasError ? '#EF4444' : '#3B82F6'};
          }
        `;
      default:
        return `
          border: 2px solid ${props.$hasError ? '#EF4444' : '#E5E7EB'};
          &:focus {
            border-color: ${props.$hasError ? '#EF4444' : '#3B82F6'};
            box-shadow: 0 0 0 3px ${props.$hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)'};
          }
        `;
    }
  }}

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const HelperText = styled.span<{ $hasError?: boolean }>`
  font-size: 14px;
  margin-top: 6px;
  color: ${props => props.$hasError ? '#EF4444' : '#6B7280'};
`;

export default Input;