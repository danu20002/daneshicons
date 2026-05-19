import React from 'react';

export const iconData = {
  "id": "TenuIsland",
  "name": "TenuIsland",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.93 11.16 Q 10.44 19.15 17.83 4.87"
      }
    ],
    [
      "path",
      {
        "d": "M 16.53 19.08 L 16.05 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 17.32 A 2.45 5.39 93 0 1 21.18 10.25"
      }
    ]
  ]
};

export const TenuIsland = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.93 11.16 Q 10.44 19.15 17.83 4.87" />
      <path d="M 16.53 19.08 L 16.05 16.68" />
      <path d="M 7.02 17.32 A 2.45 5.39 93 0 1 21.18 10.25" />
      {children}
    </svg>
  );
});

export default TenuIsland;
