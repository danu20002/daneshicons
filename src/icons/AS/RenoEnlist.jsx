import React from 'react';

export const iconData = {
  "id": "RenoEnlist",
  "name": "RenoEnlist",
  "category": "AS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.00 12.00 a 5.00 5.00 0 1 0 10.00 0 a 5.00 5.00 0 1 0 -10.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0",
        "stroke-dasharray": "2 3"
      }
    ]
  ]
};

export const RenoEnlist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 12.00 a 2.14 2.14 0 1 0 4.29 0 a 2.14 2.14 0 1 0 -4.29 0" />
      <path d="M 7.00 12.00 a 5.00 5.00 0 1 0 10.00 0 a 5.00 5.00 0 1 0 -10.00 0" />
      <path d="M 4.29 12.00 a 7.71 7.71 0 1 0 15.42 0 a 7.71 7.71 0 1 0 -15.42 0" stroke-dasharray="2 3" />
      {children}
    </svg>
  );
});

export default RenoEnlist;
