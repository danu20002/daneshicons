import React from 'react';

export const iconData = {
  "id": "SpodoThrust",
  "name": "SpodoThrust",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.56 9.91 L 19.94 8.14 L 7.62 21.50 L 9.55 2.91 L 11.94 12.85 L 9.11 11.23 L 14.72 21.66 L 9.48 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.43 10.31 C 2.33 12.49, 12.40 3.68, 10.62 6.94"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 8.70 A 3.82 4.57 0 0 1 12.81 5.40"
      }
    ]
  ]
};

export const SpodoThrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.56 9.91 L 19.94 8.14 L 7.62 21.50 L 9.55 2.91 L 11.94 12.85 L 9.11 11.23 L 14.72 21.66 L 9.48 18.99" />
      <path d="M 17.43 10.31 C 2.33 12.49, 12.40 3.68, 10.62 6.94" />
      <path d="M 8.08 8.70 A 3.82 4.57 0 0 1 12.81 5.40" />
      {children}
    </svg>
  );
});

export default SpodoThrust;
