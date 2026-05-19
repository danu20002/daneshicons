import React from 'react';

export const iconData = {
  "id": "ParaWonder",
  "name": "ParaWonder",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.59 16.42 L 2.97 19.85"
      }
    ],
    [
      "path",
      {
        "d": "M 14.28 10.36 L 18.45 14.17 L 19.82 11.78 L 7.64 4.57 L 6.50 10.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.98 19.50 A 2.66 4.88 61 0 1 7.23 2.78"
      }
    ]
  ]
};

export const ParaWonder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.59 16.42 L 2.97 19.85" />
      <path d="M 14.28 10.36 L 18.45 14.17 L 19.82 11.78 L 7.64 4.57 L 6.50 10.13" />
      <path d="M 14.98 19.50 A 2.66 4.88 61 0 1 7.23 2.78" />
      {children}
    </svg>
  );
});

export default ParaWonder;
