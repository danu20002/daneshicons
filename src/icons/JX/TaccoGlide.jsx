import React from 'react';

export const iconData = {
  "id": "TaccoGlide",
  "name": "TaccoGlide",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 5.92 L 20.24 5.92 L 20.24 18.08 L 3.76 18.08 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.76 5.92 L 7.07 2.61 L 23.55 2.61 L 20.24 5.92"
      }
    ],
    [
      "path",
      {
        "d": "M 20.24 5.92 L 23.55 2.61 L 23.55 14.77 L 20.24 18.08"
      }
    ]
  ]
};

export const TaccoGlide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 5.92 L 20.24 5.92 L 20.24 18.08 L 3.76 18.08 Z" />
      <path d="M 3.76 5.92 L 7.07 2.61 L 23.55 2.61 L 20.24 5.92" />
      <path d="M 20.24 5.92 L 23.55 2.61 L 23.55 14.77 L 20.24 18.08" />
      {children}
    </svg>
  );
});

export default TaccoGlide;
