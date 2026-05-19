import React from 'react';

export const iconData = {
  "id": "RegulaSmile",
  "name": "RegulaSmile",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.42 11.84 L 9.38 10.43 L 7.35 3.62 L 12.05 8.95 L 16.94 3.78 L 14.67 10.52 L 21.58 12.16 L 14.62 13.57 L 16.65 20.38 L 11.95 15.05 L 7.06 20.22 L 9.33 13.48 Z"
      }
    ]
  ]
};

export const RegulaSmile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.42 11.84 L 9.38 10.43 L 7.35 3.62 L 12.05 8.95 L 16.94 3.78 L 14.67 10.52 L 21.58 12.16 L 14.62 13.57 L 16.65 20.38 L 11.95 15.05 L 7.06 20.22 L 9.33 13.48 Z" />
      {children}
    </svg>
  );
});

export default RegulaSmile;
