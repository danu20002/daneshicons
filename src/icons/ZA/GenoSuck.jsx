import React from 'react';

export const iconData = {
  "id": "GenoSuck",
  "name": "GenoSuck",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.65 7.57 L 11.65 7.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.66 6.02 L 15.66 9.49"
      }
    ],
    [
      "path",
      {
        "d": "M 18.01 10.45 L 16.01 13.91"
      }
    ],
    [
      "path",
      {
        "d": "M 16.35 16.43 L 12.35 16.43"
      }
    ],
    [
      "path",
      {
        "d": "M 10.34 17.98 L 8.34 14.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.99 13.55 L 7.99 10.09"
      }
    ]
  ]
};

export const GenoSuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.65 7.57 L 11.65 7.57" />
      <path d="M 13.66 6.02 L 15.66 9.49" />
      <path d="M 18.01 10.45 L 16.01 13.91" />
      <path d="M 16.35 16.43 L 12.35 16.43" />
      <path d="M 10.34 17.98 L 8.34 14.51" />
      <path d="M 5.99 13.55 L 7.99 10.09" />
      {children}
    </svg>
  );
});

export default GenoSuck;
