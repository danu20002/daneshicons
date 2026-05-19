import React from 'react';

export const iconData = {
  "id": "ZampognaDuty",
  "name": "ZampognaDuty",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.05 4.27 Q 17.84 19.33 6.62 8.21"
      }
    ],
    [
      "path",
      {
        "d": "M 11.52 19.18 C 21.18 3.40, 11.91 19.67, 9.33 19.59"
      }
    ],
    [
      "path",
      {
        "d": "M 21.38 3.74 L 7.94 9.60 L 21.20 7.58 L 20.43 14.72 L 16.53 5.60"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 9.22 Q 21.40 13.50 6.39 5.24"
      }
    ],
    [
      "path",
      {
        "d": "M 5.43 16.99 L 12.10 14.03 L 4.91 10.87 L 7.33 11.98"
      }
    ],
    [
      "path",
      {
        "d": "M 2.38 14.18 A 5.42 2.23 28 0 1 3.19 7.64"
      }
    ]
  ]
};

export const ZampognaDuty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.05 4.27 Q 17.84 19.33 6.62 8.21" />
      <path d="M 11.52 19.18 C 21.18 3.40, 11.91 19.67, 9.33 19.59" />
      <path d="M 21.38 3.74 L 7.94 9.60 L 21.20 7.58 L 20.43 14.72 L 16.53 5.60" />
      <path d="M 17.89 9.22 Q 21.40 13.50 6.39 5.24" />
      <path d="M 5.43 16.99 L 12.10 14.03 L 4.91 10.87 L 7.33 11.98" />
      <path d="M 2.38 14.18 A 5.42 2.23 28 0 1 3.19 7.64" />
      {children}
    </svg>
  );
});

export default ZampognaDuty;
