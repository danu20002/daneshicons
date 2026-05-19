import React from 'react';

export const iconData = {
  "id": "VegliaDeliver",
  "name": "VegliaDeliver",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.25 5.33 L 20.65 10.35 L 9.10 20.31 Z"
      }
    ]
  ]
};

export const VegliaDeliver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.25 5.33 L 20.65 10.35 L 9.10 20.31 Z" />
      {children}
    </svg>
  );
});

export default VegliaDeliver;
