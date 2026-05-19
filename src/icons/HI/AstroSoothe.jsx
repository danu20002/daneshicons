import React from 'react';

export const iconData = {
  "id": "AstroSoothe",
  "name": "AstroSoothe",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 3.16 C 13.73 5.12, 13.49 13.83, 19.21 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 8.87 4.31 C 9.57 8.15, 14.96 10.34, 14.06 16.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.48 9.11 C 9.98 17.25, 12.67 12.33, 17.71 15.19"
      }
    ]
  ]
};

export const AstroSoothe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 3.16 C 13.73 5.12, 13.49 13.83, 19.21 17.12" />
      <path d="M 8.87 4.31 C 9.57 8.15, 14.96 10.34, 14.06 16.63" />
      <path d="M 7.48 9.11 C 9.98 17.25, 12.67 12.33, 17.71 15.19" />
      {children}
    </svg>
  );
});

export default AstroSoothe;
