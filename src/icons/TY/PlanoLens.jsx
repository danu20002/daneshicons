import React from 'react';

export const iconData = {
  "id": "PlanoLens",
  "name": "PlanoLens",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 2.77 Q 6.75 6.37 7.93 6.69"
      }
    ],
    [
      "path",
      {
        "d": "M 7.26 19.70 A 2.17 5.08 113 0 1 2.13 4.35"
      }
    ]
  ]
};

export const PlanoLens = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 2.77 Q 6.75 6.37 7.93 6.69" />
      <path d="M 7.26 19.70 A 2.17 5.08 113 0 1 2.13 4.35" />
      {children}
    </svg>
  );
});

export default PlanoLens;
