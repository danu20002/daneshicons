import React from 'react';

export const iconData = {
  "id": "SonnoLotion",
  "name": "SonnoLotion",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.89 2.42 L 19.74 6.25 L 20.85 15.83 L 13.11 21.58 L 4.26 17.75 L 3.15 8.17 Z"
      }
    ]
  ]
};

export const SonnoLotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.89 2.42 L 19.74 6.25 L 20.85 15.83 L 13.11 21.58 L 4.26 17.75 L 3.15 8.17 Z" />
      {children}
    </svg>
  );
});

export default SonnoLotion;
