import React from 'react';

export const iconData = {
  "id": "EpiMoose",
  "name": "EpiMoose",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.96 19.72 L 4.28 6.96 L 17.04 4.28 L 19.72 17.04 Z"
      }
    ]
  ]
};

export const EpiMoose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.96 19.72 L 4.28 6.96 L 17.04 4.28 L 19.72 17.04 Z" />
      {children}
    </svg>
  );
});

export default EpiMoose;
