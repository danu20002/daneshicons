import React from 'react';

export const iconData = {
  "id": "FidoSalad",
  "name": "FidoSalad",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.23 4.26 L 21.31 11.26 L 18.38 18.82 L 10.65 21.24 L 3.93 16.71 L 3.29 8.63 L 9.21 3.09 Z"
      }
    ]
  ]
};

export const FidoSalad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.23 4.26 L 21.31 11.26 L 18.38 18.82 L 10.65 21.24 L 3.93 16.71 L 3.29 8.63 L 9.21 3.09 Z" />
      {children}
    </svg>
  );
});

export default FidoSalad;
