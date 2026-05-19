import React from 'react';

export const iconData = {
  "id": "UlulaLatitude",
  "name": "UlulaLatitude",
  "category": "BE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 12.00 a 7.05 7.05 0 1 0 14.09 0 a 7.05 7.05 0 1 0 -14.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 12.00 a 4.92 4.92 0 1 1 9.85 0 a 4.92 4.92 0 1 1 -9.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.55 12.00 L 20.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.27 17.67 L 16.27 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 17.67 L 7.73 19.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.45 12.00 L 3.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 6.33 L 7.73 4.60"
      }
    ],
    [
      "path",
      {
        "d": "M 15.27 6.33 L 16.27 4.60"
      }
    ]
  ]
};

export const UlulaLatitude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 12.00 a 7.05 7.05 0 1 0 14.09 0 a 7.05 7.05 0 1 0 -14.09 0" />
      <path d="M 7.08 12.00 a 4.92 4.92 0 1 1 9.85 0 a 4.92 4.92 0 1 1 -9.85 0" />
      <path d="M 18.55 12.00 L 20.55 12.00" />
      <path d="M 15.27 17.67 L 16.27 19.40" />
      <path d="M 8.73 17.67 L 7.73 19.40" />
      <path d="M 5.45 12.00 L 3.45 12.00" />
      <path d="M 8.73 6.33 L 7.73 4.60" />
      <path d="M 15.27 6.33 L 16.27 4.60" />
      {children}
    </svg>
  );
});

export default UlulaLatitude;
