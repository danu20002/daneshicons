import React from 'react';

export const iconData = {
  "id": "ThalamoSwim",
  "name": "ThalamoSwim",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.03 12.00 Q 15.45 13.43 17.68 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 17.68 Q 13.43 15.45 12.00 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.03 Q 10.57 15.45 6.32 17.68"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 17.68 Q 8.55 13.43 3.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 Q 8.55 10.57 6.32 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 6.32 Q 10.57 8.55 12.00 3.97"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 Q 13.43 8.55 17.68 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 17.68 6.32 Q 15.45 10.57 20.03 12.00"
      }
    ]
  ]
};

export const ThalamoSwim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.03 12.00 Q 15.45 13.43 17.68 17.68" />
      <path d="M 17.68 17.68 Q 13.43 15.45 12.00 20.03" />
      <path d="M 12.00 20.03 Q 10.57 15.45 6.32 17.68" />
      <path d="M 6.32 17.68 Q 8.55 13.43 3.97 12.00" />
      <path d="M 3.97 12.00 Q 8.55 10.57 6.32 6.32" />
      <path d="M 6.32 6.32 Q 10.57 8.55 12.00 3.97" />
      <path d="M 12.00 3.97 Q 13.43 8.55 17.68 6.32" />
      <path d="M 17.68 6.32 Q 15.45 10.57 20.03 12.00" />
      {children}
    </svg>
  );
});

export default ThalamoSwim;
