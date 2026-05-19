import React from 'react';

export const iconData = {
  "id": "SquamoScroll",
  "name": "SquamoScroll",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.95 9.17 C 14.74 17.75, 18.50 4.56, 3.23 6.18"
      }
    ],
    [
      "path",
      {
        "d": "M 14.28 15.32 L 7.85 10.11"
      }
    ],
    [
      "path",
      {
        "d": "M 21.24 15.81 A 6.91 4.87 89 0 0 7.07 8.22"
      }
    ],
    [
      "path",
      {
        "d": "M 16.56 4.76 A 2.79 5.70 177 0 1 8.51 10.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.70 15.99 Q 6.54 10.72 4.35 3.72"
      }
    ]
  ]
};

export const SquamoScroll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.95 9.17 C 14.74 17.75, 18.50 4.56, 3.23 6.18" />
      <path d="M 14.28 15.32 L 7.85 10.11" />
      <path d="M 21.24 15.81 A 6.91 4.87 89 0 0 7.07 8.22" />
      <path d="M 16.56 4.76 A 2.79 5.70 177 0 1 8.51 10.82" />
      <path d="M 13.70 15.99 Q 6.54 10.72 4.35 3.72" />
      {children}
    </svg>
  );
});

export default SquamoScroll;
