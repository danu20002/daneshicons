import React from 'react';

export const iconData = {
  "id": "ExtraLobby",
  "name": "ExtraLobby",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.83 20.27 L 8.90 13.25 L 2.54 9.64 L 9.85 9.44 L 11.32 2.27 L 13.77 9.16 L 21.04 8.35 L 15.25 12.81 L 18.27 19.47 L 12.23 15.34 Z"
      }
    ]
  ]
};

export const ExtraLobby = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.83 20.27 L 8.90 13.25 L 2.54 9.64 L 9.85 9.44 L 11.32 2.27 L 13.77 9.16 L 21.04 8.35 L 15.25 12.81 L 18.27 19.47 L 12.23 15.34 Z" />
      {children}
    </svg>
  );
});

export default ExtraLobby;
