import React from 'react';

export const iconData = {
  "id": "VelocePinch",
  "name": "VelocePinch",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.11 5.99 L 20.89 5.99 L 20.89 18.01 L 3.11 18.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.11 5.99 L 7.67 1.43 L 25.45 1.43 L 20.89 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 20.89 5.99 L 25.45 1.43 L 25.45 13.45 L 20.89 18.01"
      }
    ]
  ]
};

export const VelocePinch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.11 5.99 L 20.89 5.99 L 20.89 18.01 L 3.11 18.01 Z" />
      <path d="M 3.11 5.99 L 7.67 1.43 L 25.45 1.43 L 20.89 5.99" />
      <path d="M 20.89 5.99 L 25.45 1.43 L 25.45 13.45 L 20.89 18.01" />
      {children}
    </svg>
  );
});

export default VelocePinch;
