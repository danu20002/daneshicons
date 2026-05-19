import React from 'react';

export const iconData = {
  "id": "FrigoMercy",
  "name": "FrigoMercy",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.00 L 20.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.73 L 12.00 20.27"
      }
    ],
    [
      "path",
      {
        "d": "M 1.18 12.00 a 10.82 10.82 0 1 0 21.63 0 a 10.82 10.82 0 1 0 -21.63 0"
      }
    ]
  ]
};

export const FrigoMercy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.00 L 20.27 12.00" />
      <path d="M 12.00 3.73 L 12.00 20.27" />
      <path d="M 1.18 12.00 a 10.82 10.82 0 1 0 21.63 0 a 10.82 10.82 0 1 0 -21.63 0" />
      {children}
    </svg>
  );
});

export default FrigoMercy;
