import React from 'react';

export const iconData = {
  "id": "SinoPunch",
  "name": "SinoPunch",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 8.75 L 9.48 9.03 L 10.28 2.51 L 13.31 8.34 L 19.36 5.76 L 15.83 11.31 L 21.08 15.25 L 14.52 14.97 L 13.72 21.49 L 10.69 15.66 L 4.64 18.24 L 8.17 12.69 Z"
      }
    ]
  ]
};

export const SinoPunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 8.75 L 9.48 9.03 L 10.28 2.51 L 13.31 8.34 L 19.36 5.76 L 15.83 11.31 L 21.08 15.25 L 14.52 14.97 L 13.72 21.49 L 10.69 15.66 L 4.64 18.24 L 8.17 12.69 Z" />
      {children}
    </svg>
  );
});

export default SinoPunch;
