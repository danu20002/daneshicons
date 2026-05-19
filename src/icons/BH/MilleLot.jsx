import React from 'react';

export const iconData = {
  "id": "MilleLot",
  "name": "MilleLot",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.42 8.41 L 20.76 14.66 L 16.99 19.67 L 10.90 21.09 L 5.31 18.25 L 2.86 12.49 L 4.68 6.50 L 9.93 3.08 L 16.14 3.84 Z"
      }
    ]
  ]
};

export const MilleLot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.42 8.41 L 20.76 14.66 L 16.99 19.67 L 10.90 21.09 L 5.31 18.25 L 2.86 12.49 L 4.68 6.50 L 9.93 3.08 L 16.14 3.84 Z" />
      {children}
    </svg>
  );
});

export default MilleLot;
