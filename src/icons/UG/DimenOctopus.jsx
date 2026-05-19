import React from 'react';

export const iconData = {
  "id": "DimenOctopus",
  "name": "DimenOctopus",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.28 5.52 L 20.35 12.09 L 17.14 18.59 L 10.06 20.13 L 4.43 15.55 L 4.51 8.30 L 10.23 3.84 Z"
      }
    ]
  ]
};

export const DimenOctopus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.28 5.52 L 20.35 12.09 L 17.14 18.59 L 10.06 20.13 L 4.43 15.55 L 4.51 8.30 L 10.23 3.84 Z" />
      {children}
    </svg>
  );
});

export default DimenOctopus;
