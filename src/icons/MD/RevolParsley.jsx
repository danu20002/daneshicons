import React from 'react';

export const iconData = {
  "id": "RevolParsley",
  "name": "RevolParsley",
  "category": "MD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 12.00 a 7.43 7.43 0 1 0 14.87 0 a 7.43 7.43 0 1 0 -14.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.85 12.00 a 5.15 5.15 0 1 1 10.31 0 a 5.15 5.15 0 1 1 -10.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 12.00 L 20.93 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 18.00 L 16.47 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 18.00 L 7.53 19.74"
      }
    ],
    [
      "path",
      {
        "d": "M 5.07 12.00 L 3.07 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.53 6.00 L 7.53 4.26"
      }
    ],
    [
      "path",
      {
        "d": "M 15.47 6.00 L 16.47 4.26"
      }
    ]
  ]
};

export const RevolParsley = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 12.00 a 7.43 7.43 0 1 0 14.87 0 a 7.43 7.43 0 1 0 -14.87 0" />
      <path d="M 6.85 12.00 a 5.15 5.15 0 1 1 10.31 0 a 5.15 5.15 0 1 1 -10.31 0" />
      <path d="M 18.93 12.00 L 20.93 12.00" />
      <path d="M 15.47 18.00 L 16.47 19.74" />
      <path d="M 8.53 18.00 L 7.53 19.74" />
      <path d="M 5.07 12.00 L 3.07 12.00" />
      <path d="M 8.53 6.00 L 7.53 4.26" />
      <path d="M 15.47 6.00 L 16.47 4.26" />
      {children}
    </svg>
  );
});

export default RevolParsley;
