import React from 'react';

export const iconData = {
  "id": "VellutoRecruit",
  "name": "VellutoRecruit",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.78 12.74 L 9.93 6.77 L 9.61 16.12 L 21.48 19.08"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 16.34 Q 12.05 5.40 12.17 11.04"
      }
    ],
    [
      "path",
      {
        "d": "M 17.16 19.78 C 18.23 11.42, 6.59 15.68, 8.69 10.37"
      }
    ],
    [
      "path",
      {
        "d": "M 10.10 5.93 L 19.85 14.18 L 17.24 6.86 L 14.48 16.28 L 5.61 13.93 L 8.71 17.13 L 18.17 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 13.23 21.12 A 2.50 5.03 94 0 1 3.60 8.97"
      }
    ]
  ]
};

export const VellutoRecruit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.78 12.74 L 9.93 6.77 L 9.61 16.12 L 21.48 19.08" />
      <path d="M 15.83 16.34 Q 12.05 5.40 12.17 11.04" />
      <path d="M 17.16 19.78 C 18.23 11.42, 6.59 15.68, 8.69 10.37" />
      <path d="M 10.10 5.93 L 19.85 14.18 L 17.24 6.86 L 14.48 16.28 L 5.61 13.93 L 8.71 17.13 L 18.17 14.73" />
      <path d="M 13.23 21.12 A 2.50 5.03 94 0 1 3.60 8.97" />
      {children}
    </svg>
  );
});

export default VellutoRecruit;
