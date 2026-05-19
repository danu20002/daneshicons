import React from 'react';

export const iconData = {
  "id": "ValvolaFlamingo",
  "name": "ValvolaFlamingo",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.74 16.09 L 14.31 14.61 L 14.87 22.17 L 11.40 15.43 L 5.84 20.59 L 8.95 13.67 L 1.45 12.54 L 8.79 10.65 L 5.00 4.09 L 11.05 8.65 L 13.82 1.59 L 14.03 9.17 L 21.27 6.94 L 15.48 11.82 Z"
      }
    ]
  ]
};

export const ValvolaFlamingo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.74 16.09 L 14.31 14.61 L 14.87 22.17 L 11.40 15.43 L 5.84 20.59 L 8.95 13.67 L 1.45 12.54 L 8.79 10.65 L 5.00 4.09 L 11.05 8.65 L 13.82 1.59 L 14.03 9.17 L 21.27 6.94 L 15.48 11.82 Z" />
      {children}
    </svg>
  );
});

export default ValvolaFlamingo;
