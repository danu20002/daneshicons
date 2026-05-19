import React from 'react';

export const iconData = {
  "id": "LavaMoist",
  "name": "LavaMoist",
  "category": "ZP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 4.05 C 6.19 12.87, 17.73 8.72, 14.62 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 9.91 2.44 C 8.08 19.50, 8.63 8.84, 19.98 17.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 9.84 C 12.60 5.17, 18.31 14.37, 18.61 18.61"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 5.20 C 7.07 17.66, 7.90 5.72, 16.03 15.60"
      }
    ],
    [
      "path",
      {
        "d": "M 5.65 2.06 C 7.05 7.74, 12.95 13.48, 14.30 15.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.65 6.40 C 16.57 17.21, 14.34 17.56, 17.25 15.35"
      }
    ]
  ]
};

export const LavaMoist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 4.05 C 6.19 12.87, 17.73 8.72, 14.62 18.43" />
      <path d="M 9.91 2.44 C 8.08 19.50, 8.63 8.84, 19.98 17.00" />
      <path d="M 3.94 9.84 C 12.60 5.17, 18.31 14.37, 18.61 18.61" />
      <path d="M 3.67 5.20 C 7.07 17.66, 7.90 5.72, 16.03 15.60" />
      <path d="M 5.65 2.06 C 7.05 7.74, 12.95 13.48, 14.30 15.19" />
      <path d="M 7.65 6.40 C 16.57 17.21, 14.34 17.56, 17.25 15.35" />
      {children}
    </svg>
  );
});

export default LavaMoist;
