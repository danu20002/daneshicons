import React from 'react';

export const iconData = {
  "id": "ScapoPatron",
  "name": "ScapoPatron",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.48 19.99 L 5.82 17.28 L 4.34 9.29 L 10.52 4.01 L 18.18 6.72 L 19.66 14.71 Z"
      }
    ]
  ]
};

export const ScapoPatron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.48 19.99 L 5.82 17.28 L 4.34 9.29 L 10.52 4.01 L 18.18 6.72 L 19.66 14.71 Z" />
      {children}
    </svg>
  );
});

export default ScapoPatron;
