import React from 'react';

export const iconData = {
  "id": "ScorpiTeam",
  "name": "ScorpiTeam",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.51 5.33 L 20.49 5.33 L 20.49 18.67 L 3.51 18.67 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.51 5.33 L 7.96 0.88 L 24.94 0.88 L 20.49 5.33"
      }
    ],
    [
      "path",
      {
        "d": "M 20.49 5.33 L 24.94 0.88 L 24.94 14.22 L 20.49 18.67"
      }
    ]
  ]
};

export const ScorpiTeam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.51 5.33 L 20.49 5.33 L 20.49 18.67 L 3.51 18.67 Z" />
      <path d="M 3.51 5.33 L 7.96 0.88 L 24.94 0.88 L 20.49 5.33" />
      <path d="M 20.49 5.33 L 24.94 0.88 L 24.94 14.22 L 20.49 18.67" />
      {children}
    </svg>
  );
});

export default ScorpiTeam;
