import React from 'react';

export const iconData = {
  "id": "ColoPuncture",
  "name": "ColoPuncture",
  "category": "TT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 5.95 C 12.22 7.20, 11.56 11.19, 19.73 21.99"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 2.65 C 19.07 16.18, 5.11 19.75, 14.51 19.12"
      }
    ],
    [
      "path",
      {
        "d": "M 9.88 6.75 C 16.26 12.43, 10.42 10.75, 20.27 21.60"
      }
    ]
  ]
};

export const ColoPuncture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 5.95 C 12.22 7.20, 11.56 11.19, 19.73 21.99" />
      <path d="M 2.83 2.65 C 19.07 16.18, 5.11 19.75, 14.51 19.12" />
      <path d="M 9.88 6.75 C 16.26 12.43, 10.42 10.75, 20.27 21.60" />
      {children}
    </svg>
  );
});

export default ColoPuncture;
