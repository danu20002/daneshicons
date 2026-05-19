import React from 'react';

export const iconData = {
  "id": "BaroUnfold",
  "name": "BaroUnfold",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.52 4.00 L 18.58 7.41 L 19.69 14.28 L 15.01 19.44 L 8.06 18.99 L 4.08 13.28 L 6.06 6.61 Z"
      }
    ]
  ]
};

export const BaroUnfold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.52 4.00 L 18.58 7.41 L 19.69 14.28 L 15.01 19.44 L 8.06 18.99 L 4.08 13.28 L 6.06 6.61 Z" />
      {children}
    </svg>
  );
});

export default BaroUnfold;
