import React, { useState } from "react";
import styled from "styled-components";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  children,
  ...props
}) => {
  const baseClass = "raive-btn";
  const variantClass = `${baseClass}--${variant}`;
  const sizeClass = `${baseClass}--${size}`;
  const fullWidthClass = fullWidth ? `${baseClass}--full-width` : "";

  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <StyledButton
      className={`${baseClass} ${variantClass} ${sizeClass} ${fullWidthClass}`}
      {...props}
      onClick={(e) => {
        addRipple(e);
        props.onClick?.(e);
      }}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{ top: ripple.y, left: ripple.x }}
        />
      ))}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
  box-sizing: border-box;

  /* Primary Button */
  &.raive-btn--primary {
    background-color: #000;
    color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }

  /* Secondary Button */
  &.raive-btn--secondary {
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  /* Outline Button */
  &.raive-btn--outline {
    background-color: transparent;
    color: #000;
    border: 2px solid #000;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  /* Glass Effect */
  &.raive-btn--glass {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  /* Button Sizes */
  &.raive-btn--small {
    padding: 8px 16px;
    font-size: 14px;
  }

  &.raive-btn--medium {
    padding: 12px 24px;
    font-size: 16px;
  }

  &.raive-btn--large {
    padding: 16px 32px;
    font-size: 18px;
  }

  /* Full Width */
  &.raive-btn--full-width {
    width: 100%;
  }

  /* Ripple Effect */
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  /* Hover/Focus Effects */
  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  /* Active Button */
  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

export { Button };
