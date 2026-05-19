import React from 'react';

export const iconData = {
  "id": "TriboDisplay",
  "name": "TriboDisplay",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.58 3.76 C 13.78 6.86, 13.26 9.45, 19.93 14.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.29 7.72 C 10.83 8.22, 10.39 9.68, 14.92 15.25"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 2.33 C 16.18 7.75, 6.03 13.55, 18.34 15.54"
      }
    ]
  ]
};

export const TriboDisplay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.58 3.76 C 13.78 6.86, 13.26 9.45, 19.93 14.84" />
      <path d="M 9.29 7.72 C 10.83 8.22, 10.39 9.68, 14.92 15.25" />
      <path d="M 4.28 2.33 C 16.18 7.75, 6.03 13.55, 18.34 15.54" />
      {children}
    </svg>
  );
});

export default TriboDisplay;
