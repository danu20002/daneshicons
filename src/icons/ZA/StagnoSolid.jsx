import React from 'react';

export const iconData = {
  "id": "StagnoSolid",
  "name": "StagnoSolid",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.55 10.95 L 10.55 10.95"
      }
    ],
    [
      "path",
      {
        "d": "M 13.05 6.55 L 13.05 10.55"
      }
    ],
    [
      "path",
      {
        "d": "M 17.45 13.05 L 13.45 13.05"
      }
    ],
    [
      "path",
      {
        "d": "M 10.95 17.45 L 10.95 13.45"
      }
    ]
  ]
};

export const StagnoSolid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.55 10.95 L 10.55 10.95" />
      <path d="M 13.05 6.55 L 13.05 10.55" />
      <path d="M 17.45 13.05 L 13.45 13.05" />
      <path d="M 10.95 17.45 L 10.95 13.45" />
      {children}
    </svg>
  );
});

export default StagnoSolid;
