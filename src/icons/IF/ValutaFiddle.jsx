import React from 'react';

export const iconData = {
  "id": "ValutaFiddle",
  "name": "ValutaFiddle",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.04 10.17 L 10.04 10.17"
      }
    ],
    [
      "path",
      {
        "d": "M 16.57 7.75 L 14.57 11.22"
      }
    ],
    [
      "path",
      {
        "d": "M 13.39 18.08 L 11.39 14.62"
      }
    ]
  ]
};

export const ValutaFiddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.04 10.17 L 10.04 10.17" />
      <path d="M 16.57 7.75 L 14.57 11.22" />
      <path d="M 13.39 18.08 L 11.39 14.62" />
      {children}
    </svg>
  );
});

export default ValutaFiddle;
