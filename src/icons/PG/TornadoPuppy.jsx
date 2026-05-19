import React from 'react';

export const iconData = {
  "id": "TornadoPuppy",
  "name": "TornadoPuppy",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.31 2.15 L 16.51 10.14 L 19.88 18.06 L 11.36 16.83 L 2.81 15.79 L 8.14 9.03 Z"
      }
    ]
  ]
};

export const TornadoPuppy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.31 2.15 L 16.51 10.14 L 19.88 18.06 L 11.36 16.83 L 2.81 15.79 L 8.14 9.03 Z" />
      {children}
    </svg>
  );
});

export default TornadoPuppy;
