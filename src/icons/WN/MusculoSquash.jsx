import React from 'react';

export const iconData = {
  "id": "MusculoSquash",
  "name": "MusculoSquash",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.16 9.17 L 15.57 12.81 L 19.04 18.52 L 13.08 15.50 L 9.87 21.35 L 9.51 14.69 L 2.84 14.83 L 8.43 11.19 L 4.96 5.48 L 10.92 8.50 L 14.13 2.65 L 14.49 9.31 Z"
      }
    ]
  ]
};

export const MusculoSquash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.16 9.17 L 15.57 12.81 L 19.04 18.52 L 13.08 15.50 L 9.87 21.35 L 9.51 14.69 L 2.84 14.83 L 8.43 11.19 L 4.96 5.48 L 10.92 8.50 L 14.13 2.65 L 14.49 9.31 Z" />
      {children}
    </svg>
  );
});

export default MusculoSquash;
