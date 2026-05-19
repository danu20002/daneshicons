import React from 'react';

export const iconData = {
  "id": "TaeniaSable",
  "name": "TaeniaSable",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 7.18 L 13.57 7.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.39 12.31 L 15.39 15.77"
      }
    ],
    [
      "path",
      {
        "d": "M 9.04 16.52 L 7.04 13.05"
      }
    ]
  ]
};

export const TaeniaSable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 7.18 L 13.57 7.18" />
      <path d="M 17.39 12.31 L 15.39 15.77" />
      <path d="M 9.04 16.52 L 7.04 13.05" />
      {children}
    </svg>
  );
});

export default TaeniaSable;
