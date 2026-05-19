import React from 'react';

export const iconData = {
  "id": "DimenDive",
  "name": "DimenDive",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.20 9.54 C 17.71 4.66, 6.75 19.22, 17.30 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 4.28 6.36 C 14.93 14.08, 13.93 18.76, 15.59 17.52"
      }
    ],
    [
      "path",
      {
        "d": "M 7.53 4.91 C 16.19 17.02, 12.44 11.84, 16.41 18.18"
      }
    ]
  ]
};

export const DimenDive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.20 9.54 C 17.71 4.66, 6.75 19.22, 17.30 20.44" />
      <path d="M 4.28 6.36 C 14.93 14.08, 13.93 18.76, 15.59 17.52" />
      <path d="M 7.53 4.91 C 16.19 17.02, 12.44 11.84, 16.41 18.18" />
      {children}
    </svg>
  );
});

export default DimenDive;
