import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  size = 'md',
  fullWidth = false,
  helperText,
  startIcon,
  endIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseInputStyles = 'block rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500';
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const inputClasses = [
    baseInputStyles,
    sizes[size],
    fullWidth ? 'w-full' : 'w-auto',
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
    disabled ? 'bg-gray-100 cursor-not-allowed' : '',
    startIcon ? 'pl-10' : '',
    endIcon ? 'pr-10' : '',
    className
  ].join(' ');

  const wrapperClasses = [
    'relative',
    fullWidth ? 'w-full' : 'inline-block'
  ].join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {startIcon}
          </div>
        )}
        <input
          className={inputClasses}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'error-message' : undefined}
          {...props}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600" id="error-message">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};