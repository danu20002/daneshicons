import React from 'react';

export const iconData = {
  "id": "ZolfoPaper",
  "name": "ZolfoPaper",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.11 13.34 L 2.90 12.51 L 3.52 13.44 L 4.34 9.04"
      }
    ],
    [
      "path",
      {
        "d": "M 15.50 7.35 L 14.37 6.60"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 11.13 L 9.45 17.27 L 20.44 9.43 L 3.76 19.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 12.81 C 18.40 14.68, 9.64 6.34, 17.23 7.97"
      }
    ],
    [
      "path",
      {
        "d": "M 8.95 11.98 L 11.51 17.20 L 4.04 10.41 L 10.24 9.29 L 10.53 20.14 L 5.16 8.89 L 2.41 2.70 L 7.09 16.59"
      }
    ]
  ]
};

export const ZolfoPaper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.11 13.34 L 2.90 12.51 L 3.52 13.44 L 4.34 9.04" />
      <path d="M 15.50 7.35 L 14.37 6.60" />
      <path d="M 6.69 11.13 L 9.45 17.27 L 20.44 9.43 L 3.76 19.05" />
      <path d="M 4.11 12.81 C 18.40 14.68, 9.64 6.34, 17.23 7.97" />
      <path d="M 8.95 11.98 L 11.51 17.20 L 4.04 10.41 L 10.24 9.29 L 10.53 20.14 L 5.16 8.89 L 2.41 2.70 L 7.09 16.59" />
      {children}
    </svg>
  );
});

export default ZolfoPaper;
