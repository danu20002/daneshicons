import React from 'react';

export const iconData = {
  "id": "TopoPaw",
  "name": "TopoPaw",
  "category": "OQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.42 5.03 C 6.98 8.85, 10.48 15.96, 14.77 17.72"
      }
    ],
    [
      "path",
      {
        "d": "M 7.20 4.49 C 6.61 9.38, 14.61 19.31, 16.25 18.51"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 5.60 C 13.44 12.07, 8.16 18.24, 14.62 18.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 6.91 C 17.84 12.47, 7.01 12.45, 20.85 17.57"
      }
    ]
  ]
};

export const TopoPaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.42 5.03 C 6.98 8.85, 10.48 15.96, 14.77 17.72" />
      <path d="M 7.20 4.49 C 6.61 9.38, 14.61 19.31, 16.25 18.51" />
      <path d="M 5.78 5.60 C 13.44 12.07, 8.16 18.24, 14.62 18.56" />
      <path d="M 7.78 6.91 C 17.84 12.47, 7.01 12.45, 20.85 17.57" />
      {children}
    </svg>
  );
});

export default TopoPaw;
