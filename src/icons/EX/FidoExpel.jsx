import React from 'react';

export const iconData = {
  "id": "FidoExpel",
  "name": "FidoExpel",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.10 12.80 L 6.85 4.69 L 15.76 3.89 L 20.90 11.20 L 17.15 19.31 L 8.24 20.11 Z"
      }
    ]
  ]
};

export const FidoExpel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.10 12.80 L 6.85 4.69 L 15.76 3.89 L 20.90 11.20 L 17.15 19.31 L 8.24 20.11 Z" />
      {children}
    </svg>
  );
});

export default FidoExpel;
