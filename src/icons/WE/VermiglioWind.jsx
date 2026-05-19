import React from 'react';

export const iconData = {
  "id": "VermiglioWind",
  "name": "VermiglioWind",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.48 12.36 L 11.64 21.48 L 2.52 11.64 L 12.36 2.52 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 14.52 L 9.48 17.89 L 6.11 9.48 L 14.52 6.11 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.25 13.99 L 10.01 14.25 L 9.75 10.01 L 13.99 9.75 Z"
      }
    ]
  ]
};

export const VermiglioWind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.48 12.36 L 11.64 21.48 L 2.52 11.64 L 12.36 2.52 Z" />
      <path d="M 17.89 14.52 L 9.48 17.89 L 6.11 9.48 L 14.52 6.11 Z" />
      <path d="M 14.25 13.99 L 10.01 14.25 L 9.75 10.01 L 13.99 9.75 Z" />
      {children}
    </svg>
  );
});

export default VermiglioWind;
