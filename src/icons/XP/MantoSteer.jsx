import React from 'react';

export const iconData = {
  "id": "MantoSteer",
  "name": "MantoSteer",
  "category": "XP",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.88 12.45 L 15.78 5.45 L 7.91 14.19 L 16.85 3.14 L 8.78 10.27 L 19.15 8.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 17.07 L 2.51 19.11 L 12.42 17.94 L 16.41 17.56 L 10.36 10.11 L 19.45 10.73"
      }
    ],
    [
      "path",
      {
        "d": "M 21.52 8.92 A 6.53 3.88 168 0 1 14.54 8.28"
      }
    ],
    [
      "path",
      {
        "d": "M 4.07 2.88 C 10.02 5.50, 11.03 8.05, 2.06 9.37"
      }
    ]
  ]
};

export const MantoSteer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.88 12.45 L 15.78 5.45 L 7.91 14.19 L 16.85 3.14 L 8.78 10.27 L 19.15 8.59" />
      <path d="M 3.43 17.07 L 2.51 19.11 L 12.42 17.94 L 16.41 17.56 L 10.36 10.11 L 19.45 10.73" />
      <path d="M 21.52 8.92 A 6.53 3.88 168 0 1 14.54 8.28" />
      <path d="M 4.07 2.88 C 10.02 5.50, 11.03 8.05, 2.06 9.37" />
      {children}
    </svg>
  );
});

export default MantoSteer;
