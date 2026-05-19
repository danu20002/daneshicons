import React from 'react';

export const iconData = {
  "id": "TraumaThirst",
  "name": "TraumaThirst",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.21 12.00 L 15.79 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 12.00 L 12.97 9.15"
      }
    ],
    [
      "path",
      {
        "d": "M 8.21 12.00 L 12.97 14.85"
      }
    ]
  ]
};

export const TraumaThirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.21 12.00 L 15.79 12.00" />
      <path d="M 8.21 12.00 L 12.97 9.15" />
      <path d="M 8.21 12.00 L 12.97 14.85" />
      {children}
    </svg>
  );
});

export default TraumaThirst;
