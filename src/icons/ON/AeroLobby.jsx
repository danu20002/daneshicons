import React from 'react';

export const iconData = {
  "id": "AeroLobby",
  "name": "AeroLobby",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.20 21.64 L 10.88 15.53 L 3.82 18.03 L 8.29 12.03 L 3.74 6.09 L 10.83 8.48 L 15.07 2.32 L 14.98 9.80 L 22.16 11.93 L 15.01 14.16 Z"
      }
    ]
  ]
};

export const AeroLobby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.20 21.64 L 10.88 15.53 L 3.82 18.03 L 8.29 12.03 L 3.74 6.09 L 10.83 8.48 L 15.07 2.32 L 14.98 9.80 L 22.16 11.93 L 15.01 14.16 Z" />
      {children}
    </svg>
  );
});

export default AeroLobby;
