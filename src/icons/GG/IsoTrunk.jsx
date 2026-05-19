import React from 'react';

export const iconData = {
  "id": "IsoTrunk",
  "name": "IsoTrunk",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 5.70 L 20.45 5.70 L 20.45 18.30 L 3.55 18.30 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 5.70 L 7.44 1.82 L 24.34 1.82 L 20.45 5.70"
      }
    ],
    [
      "path",
      {
        "d": "M 20.45 5.70 L 24.34 1.82 L 24.34 14.41 L 20.45 18.30"
      }
    ]
  ]
};

export const IsoTrunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 5.70 L 20.45 5.70 L 20.45 18.30 L 3.55 18.30 Z" />
      <path d="M 3.55 5.70 L 7.44 1.82 L 24.34 1.82 L 20.45 5.70" />
      <path d="M 20.45 5.70 L 24.34 1.82 L 24.34 14.41 L 20.45 18.30" />
      {children}
    </svg>
  );
});

export default IsoTrunk;
