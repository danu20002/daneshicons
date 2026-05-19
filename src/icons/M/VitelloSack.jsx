import React from 'react';

export const iconData = {
  "id": "VitelloSack",
  "name": "VitelloSack",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.13 5.20 L 10.22 8.84 L 15.37 14.35"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 2.38 L 16.35 7.68 L 8.42 7.86 L 16.75 3.82 L 13.46 13.66"
      }
    ]
  ]
};

export const VitelloSack = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.13 5.20 L 10.22 8.84 L 15.37 14.35" />
      <path d="M 14.53 2.38 L 16.35 7.68 L 8.42 7.86 L 16.75 3.82 L 13.46 13.66" />
      {children}
    </svg>
  );
});

export default VitelloSack;
