import React from 'react';

export const iconData = {
  "id": "PhantoRest",
  "name": "PhantoRest",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.48 2.69 Q 14.66 21.59 15.42 5.70"
      }
    ],
    [
      "path",
      {
        "d": "M 11.94 10.41 C 7.11 13.36, 14.75 5.09, 4.16 17.03"
      }
    ],
    [
      "path",
      {
        "d": "M 19.53 16.73 A 4.89 4.47 28 0 0 6.34 15.58"
      }
    ]
  ]
};

export const PhantoRest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.48 2.69 Q 14.66 21.59 15.42 5.70" />
      <path d="M 11.94 10.41 C 7.11 13.36, 14.75 5.09, 4.16 17.03" />
      <path d="M 19.53 16.73 A 4.89 4.47 28 0 0 6.34 15.58" />
      {children}
    </svg>
  );
});

export default PhantoRest;
