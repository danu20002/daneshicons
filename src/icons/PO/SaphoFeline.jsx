import React from 'react';

export const iconData = {
  "id": "SaphoFeline",
  "name": "SaphoFeline",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.18 7.32 C 8.99 10.06, 6.26 12.54, 14.80 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 15.48 C 8.94 14.76, 8.29 9.50, 15.20 15.07"
      }
    ],
    [
      "path",
      {
        "d": "M 18.28 11.49 Q 15.64 10.01 19.23 11.86"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 10.20 A 5.78 4.53 38 0 0 15.46 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 16.43 3.49 Q 6.73 5.98 18.30 9.96"
      }
    ]
  ]
};

export const SaphoFeline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.18 7.32 C 8.99 10.06, 6.26 12.54, 14.80 14.57" />
      <path d="M 9.14 15.48 C 8.94 14.76, 8.29 9.50, 15.20 15.07" />
      <path d="M 18.28 11.49 Q 15.64 10.01 19.23 11.86" />
      <path d="M 5.07 10.20 A 5.78 4.53 38 0 0 15.46 6.69" />
      <path d="M 16.43 3.49 Q 6.73 5.98 18.30 9.96" />
      {children}
    </svg>
  );
});

export default SaphoFeline;
