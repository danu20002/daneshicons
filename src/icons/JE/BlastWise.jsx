import React from 'react';

export const iconData = {
  "id": "BlastWise",
  "name": "BlastWise",
  "category": "JE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.32 5.04 L 19.68 5.04 L 19.68 18.96 L 4.32 18.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 5.04 L 7.60 1.76 L 22.95 1.76 L 19.68 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 19.68 5.04 L 22.95 1.76 L 22.95 15.68 L 19.68 18.96"
      }
    ]
  ]
};

export const BlastWise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.32 5.04 L 19.68 5.04 L 19.68 18.96 L 4.32 18.96 Z" />
      <path d="M 4.32 5.04 L 7.60 1.76 L 22.95 1.76 L 19.68 5.04" />
      <path d="M 19.68 5.04 L 22.95 1.76 L 22.95 15.68 L 19.68 18.96" />
      {children}
    </svg>
  );
});

export default BlastWise;
