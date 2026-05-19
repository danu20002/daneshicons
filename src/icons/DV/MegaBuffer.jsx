import React from 'react';

export const iconData = {
  "id": "MegaBuffer",
  "name": "MegaBuffer",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.66 7.18 L 15.66 7.18"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 14.12 L 14.34 17.58"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 14.70 L 6.00 11.24"
      }
    ]
  ]
};

export const MegaBuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.66 7.18 L 15.66 7.18" />
      <path d="M 16.34 14.12 L 14.34 17.58" />
      <path d="M 8.00 14.70 L 6.00 11.24" />
      {children}
    </svg>
  );
});

export default MegaBuffer;
