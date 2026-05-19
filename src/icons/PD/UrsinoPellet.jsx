import React from 'react';

export const iconData = {
  "id": "UrsinoPellet",
  "name": "UrsinoPellet",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.60 17.58 L 3.02 9.69 L 8.20 3.54 L 16.25 3.76 L 21.09 10.18 L 19.09 17.97 L 11.75 21.27 Z"
      }
    ]
  ]
};

export const UrsinoPellet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.60 17.58 L 3.02 9.69 L 8.20 3.54 L 16.25 3.76 L 21.09 10.18 L 19.09 17.97 L 11.75 21.27 Z" />
      {children}
    </svg>
  );
});

export default UrsinoPellet;
