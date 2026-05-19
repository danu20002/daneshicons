import React from 'react';

export const iconData = {
  "id": "RadioNeedle",
  "name": "RadioNeedle",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 4.96 L 14.98 11.42 L 22.15 15.50 L 13.99 14.29 L 14.04 22.54 L 11.01 14.87 L 3.90 19.04 L 9.02 12.58 L 1.85 8.50 L 10.01 9.71 L 9.96 1.46 L 12.99 9.13 Z"
      }
    ]
  ]
};

export const RadioNeedle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 20.10 4.96 L 14.98 11.42 L 22.15 15.50 L 13.99 14.29 L 14.04 22.54 L 11.01 14.87 L 3.90 19.04 L 9.02 12.58 L 1.85 8.50 L 10.01 9.71 L 9.96 1.46 L 12.99 9.13 Z" />
      {children}
    </svg>
  );
});

export default RadioNeedle;
