import React from 'react';

export const iconData = {
  "id": "OrbiLone",
  "name": "OrbiLone",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.57 10.38 L 7.96 8.75 L 8.19 2.16 L 12.79 6.88 L 18.61 3.78 L 16.83 10.13 L 22.43 13.62 L 16.04 15.25 L 15.81 21.84 L 11.21 17.12 L 5.39 20.22 L 7.17 13.87 Z"
      }
    ]
  ]
};

export const OrbiLone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.57 10.38 L 7.96 8.75 L 8.19 2.16 L 12.79 6.88 L 18.61 3.78 L 16.83 10.13 L 22.43 13.62 L 16.04 15.25 L 15.81 21.84 L 11.21 17.12 L 5.39 20.22 L 7.17 13.87 Z" />
      {children}
    </svg>
  );
});

export default OrbiLone;
