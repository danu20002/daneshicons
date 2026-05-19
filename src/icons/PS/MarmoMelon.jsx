import React from 'react';

export const iconData = {
  "id": "MarmoMelon",
  "name": "MarmoMelon",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.16 12.00 a 8.84 8.84 0 1 0 17.68 0 a 8.84 8.84 0 1 0 -17.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 9.05 a 8.34 2.5007797481955945 0 1 0 16.67 0 a 8.34 2.5007797481955945 0 1 0 -16.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 14.95 a 8.34 2.5007797481955945 0 1 0 16.67 0 a 8.34 2.5007797481955945 0 1 0 -16.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.16 A 2 2 0 0 0 12.00 20.84"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.16 A 2 2 0 0 1 12.00 20.84"
      }
    ]
  ]
};

export const MarmoMelon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.16 12.00 a 8.84 8.84 0 1 0 17.68 0 a 8.84 8.84 0 1 0 -17.68 0" />
      <path d="M 3.66 9.05 a 8.34 2.5007797481955945 0 1 0 16.67 0 a 8.34 2.5007797481955945 0 1 0 -16.67 0" />
      <path d="M 3.66 14.95 a 8.34 2.5007797481955945 0 1 0 16.67 0 a 8.34 2.5007797481955945 0 1 0 -16.67 0" />
      <path d="M 12.00 3.16 A 2 2 0 0 0 12.00 20.84" />
      <path d="M 12.00 3.16 A 2 2 0 0 1 12.00 20.84" />
      {children}
    </svg>
  );
});

export default MarmoMelon;
