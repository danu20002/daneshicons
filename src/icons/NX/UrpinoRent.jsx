import React from 'react';

export const iconData = {
  "id": "UrpinoRent",
  "name": "UrpinoRent",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.61 7.59 C 19.12 8.02, 19.03 7.93, 17.14 14.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 5.07 C 4.45 6.17, 9.59 19.56, 18.59 16.51"
      }
    ],
    [
      "path",
      {
        "d": "M 9.35 9.88 C 15.66 4.93, 5.74 16.74, 20.94 17.34"
      }
    ]
  ]
};

export const UrpinoRent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.61 7.59 C 19.12 8.02, 19.03 7.93, 17.14 14.01" />
      <path d="M 5.85 5.07 C 4.45 6.17, 9.59 19.56, 18.59 16.51" />
      <path d="M 9.35 9.88 C 15.66 4.93, 5.74 16.74, 20.94 17.34" />
      {children}
    </svg>
  );
});

export default UrpinoRent;
