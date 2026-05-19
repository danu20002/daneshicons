import React from 'react';

export const iconData = {
  "id": "PaleoVampire",
  "name": "PaleoVampire",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.54 3.21 C 7.39 18.56, 4.44 9.92, 15.38 7.92"
      }
    ],
    [
      "path",
      {
        "d": "M 16.71 19.22 C 8.33 6.48, 9.91 4.82, 16.07 6.08"
      }
    ]
  ]
};

export const PaleoVampire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.54 3.21 C 7.39 18.56, 4.44 9.92, 15.38 7.92" />
      <path d="M 16.71 19.22 C 8.33 6.48, 9.91 4.82, 16.07 6.08" />
      {children}
    </svg>
  );
});

export default PaleoVampire;
