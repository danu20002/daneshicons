import React from 'react';

export const iconData = {
  "id": "PedroWarrior",
  "name": "PedroWarrior",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.15 4.21 L 19.79 16.15 L 7.85 19.79 L 4.21 7.85 Z"
      }
    ]
  ]
};

export const PedroWarrior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.15 4.21 L 19.79 16.15 L 7.85 19.79 L 4.21 7.85 Z" />
      {children}
    </svg>
  );
});

export default PedroWarrior;
