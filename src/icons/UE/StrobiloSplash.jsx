import React from 'react';

export const iconData = {
  "id": "StrobiloSplash",
  "name": "StrobiloSplash",
  "category": "UE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 12.00 a 7.03 7.03 0 1 0 14.07 0 a 7.03 7.03 0 1 0 -14.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 12.00 a 4.67 4.67 0 1 1 9.35 0 a 4.67 4.67 0 1 1 -9.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.53 12.00 L 20.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 16.20 L 18.54 17.49"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 18.43 L 13.48 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 17.66 L 7.73 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 14.23 L 3.98 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.86 9.77 L 3.98 9.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.73 6.34 L 7.73 4.61"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 5.57 L 13.48 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 17.01 7.80 L 18.54 6.51"
      }
    ]
  ]
};

export const StrobiloSplash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 12.00 a 7.03 7.03 0 1 0 14.07 0 a 7.03 7.03 0 1 0 -14.07 0" />
      <path d="M 7.33 12.00 a 4.67 4.67 0 1 1 9.35 0 a 4.67 4.67 0 1 1 -9.35 0" />
      <path d="M 18.53 12.00 L 20.53 12.00" />
      <path d="M 17.01 16.20 L 18.54 17.49" />
      <path d="M 13.13 18.43 L 13.48 20.40" />
      <path d="M 8.73 17.66 L 7.73 19.39" />
      <path d="M 5.86 14.23 L 3.98 14.92" />
      <path d="M 5.86 9.77 L 3.98 9.08" />
      <path d="M 8.73 6.34 L 7.73 4.61" />
      <path d="M 13.13 5.57 L 13.48 3.60" />
      <path d="M 17.01 7.80 L 18.54 6.51" />
      {children}
    </svg>
  );
});

export default StrobiloSplash;
