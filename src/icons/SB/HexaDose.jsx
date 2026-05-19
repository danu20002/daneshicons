import React from 'react';

export const iconData = {
  "id": "HexaDose",
  "name": "HexaDose",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.05 7.50 L 19.42 15.86 L 12.37 20.36 L 4.95 16.50 L 4.58 8.14 L 11.63 3.64 Z"
      }
    ]
  ]
};

export const HexaDose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.05 7.50 L 19.42 15.86 L 12.37 20.36 L 4.95 16.50 L 4.58 8.14 L 11.63 3.64 Z" />
      {children}
    </svg>
  );
});

export default HexaDose;
