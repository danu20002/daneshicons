import React from 'react';

export const iconData = {
  "id": "YodelNeat",
  "name": "YodelNeat",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 18.50 L 8.30 11.86 L 5.50 4.97 L 12.14 8.30 L 19.03 5.50 L 15.70 12.14 L 18.50 19.03 L 11.86 15.70 Z"
      }
    ]
  ]
};

export const YodelNeat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 18.50 L 8.30 11.86 L 5.50 4.97 L 12.14 8.30 L 19.03 5.50 L 15.70 12.14 L 18.50 19.03 L 11.86 15.70 Z" />
      {children}
    </svg>
  );
});

export default YodelNeat;
