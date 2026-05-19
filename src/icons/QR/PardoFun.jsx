import React from 'react';

export const iconData = {
  "id": "PardoFun",
  "name": "PardoFun",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.71 7.16 L 17.33 11.40 L 20.59 15.01 L 15.79 15.79 L 15.00 20.60 L 11.40 17.33 L 7.15 19.71 L 7.46 14.85 L 2.95 13.02 L 6.94 10.23 L 5.56 5.56 L 10.23 6.94 L 13.02 2.95 L 14.85 7.46 Z"
      }
    ]
  ]
};

export const PardoFun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.71 7.16 L 17.33 11.40 L 20.59 15.01 L 15.79 15.79 L 15.00 20.60 L 11.40 17.33 L 7.15 19.71 L 7.46 14.85 L 2.95 13.02 L 6.94 10.23 L 5.56 5.56 L 10.23 6.94 L 13.02 2.95 L 14.85 7.46 Z" />
      {children}
    </svg>
  );
});

export default PardoFun;
