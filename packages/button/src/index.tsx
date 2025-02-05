import React, { useState } from "react";
import "./styles.css"; // Import styles

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

  // Ripple Effect
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
    <button
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
    </button>
  );
};

export { Button };
