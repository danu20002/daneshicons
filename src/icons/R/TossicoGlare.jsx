import React from 'react';

export const iconData = {
  "id": "TossicoGlare",
  "name": "TossicoGlare",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 5.94 L 19.09 5.94 L 19.09 18.06 L 4.91 18.06 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.91 5.94 L 9.57 1.28 L 23.76 1.28 L 19.09 5.94"
      }
    ],
    [
      "path",
      {
        "d": "M 19.09 5.94 L 23.76 1.28 L 23.76 13.39 L 19.09 18.06"
      }
    ]
  ]
};

export const TossicoGlare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 5.94 L 19.09 5.94 L 19.09 18.06 L 4.91 18.06 Z" />
      <path d="M 4.91 5.94 L 9.57 1.28 L 23.76 1.28 L 19.09 5.94" />
      <path d="M 19.09 5.94 L 23.76 1.28 L 23.76 13.39 L 19.09 18.06" />
      {children}
    </svg>
  );
});

export default TossicoGlare;
