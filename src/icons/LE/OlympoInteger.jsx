import React from 'react';

export const iconData = {
  "id": "OlympoInteger",
  "name": "OlympoInteger",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.44 3.53 L 14.29 16.54"
      }
    ],
    [
      "path",
      {
        "d": "M 16.85 13.23 C 17.19 20.65, 6.04 9.36, 8.92 13.97"
      }
    ],
    [
      "path",
      {
        "d": "M 15.51 19.30 A 4.33 5.96 13 0 0 10.03 18.74"
      }
    ]
  ]
};

export const OlympoInteger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.44 3.53 L 14.29 16.54" />
      <path d="M 16.85 13.23 C 17.19 20.65, 6.04 9.36, 8.92 13.97" />
      <path d="M 15.51 19.30 A 4.33 5.96 13 0 0 10.03 18.74" />
      {children}
    </svg>
  );
});

export default OlympoInteger;
