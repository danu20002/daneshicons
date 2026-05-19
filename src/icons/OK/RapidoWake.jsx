import React from 'react';

export const iconData = {
  "id": "RapidoWake",
  "name": "RapidoWake",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.10 15.75 L 3.76 9.07 L 8.25 4.10 L 14.93 3.76 L 19.90 8.25 L 20.24 14.93 L 15.75 19.90 L 9.07 20.24 Z"
      }
    ]
  ]
};

export const RapidoWake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.10 15.75 L 3.76 9.07 L 8.25 4.10 L 14.93 3.76 L 19.90 8.25 L 20.24 14.93 L 15.75 19.90 L 9.07 20.24 Z" />
      {children}
    </svg>
  );
});

export default RapidoWake;
