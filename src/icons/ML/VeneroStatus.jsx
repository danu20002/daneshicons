import React from 'react';

export const iconData = {
  "id": "VeneroStatus",
  "name": "VeneroStatus",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 9.35 C 17.71 16.02, 7.45 17.96, 18.85 19.41"
      }
    ],
    [
      "path",
      {
        "d": "M 9.96 6.91 C 5.16 6.05, 9.60 4.05, 17.04 17.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.87 8.11 C 12.00 13.74, 11.65 6.52, 14.71 20.43"
      }
    ]
  ]
};

export const VeneroStatus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 9.35 C 17.71 16.02, 7.45 17.96, 18.85 19.41" />
      <path d="M 9.96 6.91 C 5.16 6.05, 9.60 4.05, 17.04 17.84" />
      <path d="M 9.87 8.11 C 12.00 13.74, 11.65 6.52, 14.71 20.43" />
      {children}
    </svg>
  );
});

export default VeneroStatus;
