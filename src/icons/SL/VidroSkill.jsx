import React from 'react';

export const iconData = {
  "id": "VidroSkill",
  "name": "VidroSkill",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.00 12.00 Q 16.10 14.37 16.50 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 19.79 Q 12.00 16.74 7.50 19.79"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 19.79 Q 7.90 14.37 3.00 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 12.00 Q 7.90 9.63 7.50 4.21"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 4.21 Q 12.00 7.26 16.50 4.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 4.21 Q 16.10 9.63 21.00 12.00"
      }
    ]
  ]
};

export const VidroSkill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.00 12.00 Q 16.10 14.37 16.50 19.79" />
      <path d="M 16.50 19.79 Q 12.00 16.74 7.50 19.79" />
      <path d="M 7.50 19.79 Q 7.90 14.37 3.00 12.00" />
      <path d="M 3.00 12.00 Q 7.90 9.63 7.50 4.21" />
      <path d="M 7.50 4.21 Q 12.00 7.26 16.50 4.21" />
      <path d="M 16.50 4.21 Q 16.10 9.63 21.00 12.00" />
      {children}
    </svg>
  );
});

export default VidroSkill;
