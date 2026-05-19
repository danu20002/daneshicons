import React from 'react';

export const iconData = {
  "id": "VermiglioLoop",
  "name": "VermiglioLoop",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.62 14.14 L 10.11 4.74"
      }
    ],
    [
      "path",
      {
        "d": "M 2.12 20.79 L 21.35 9.32 L 6.67 7.98 L 15.52 10.83 L 18.47 4.51"
      }
    ],
    [
      "path",
      {
        "d": "M 2.13 2.28 L 8.16 17.59"
      }
    ]
  ]
};

export const VermiglioLoop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.62 14.14 L 10.11 4.74" />
      <path d="M 2.12 20.79 L 21.35 9.32 L 6.67 7.98 L 15.52 10.83 L 18.47 4.51" />
      <path d="M 2.13 2.28 L 8.16 17.59" />
      {children}
    </svg>
  );
});

export default VermiglioLoop;
