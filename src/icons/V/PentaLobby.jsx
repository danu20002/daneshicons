import React from 'react';

export const iconData = {
  "id": "PentaLobby",
  "name": "PentaLobby",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.40 20.13 L 6.66 19.01 L 3.26 10.88 L 8.60 3.87 L 17.34 4.99 L 20.74 13.12 Z"
      }
    ]
  ]
};

export const PentaLobby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.40 20.13 L 6.66 19.01 L 3.26 10.88 L 8.60 3.87 L 17.34 4.99 L 20.74 13.12 Z" />
      {children}
    </svg>
  );
});

export default PentaLobby;
