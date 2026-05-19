import React from 'react';

export const iconData = {
  "id": "XerograWeekend",
  "name": "XerograWeekend",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 5.60 L 15.24 11.43 L 22.58 14.99 L 14.46 14.18 L 16.25 22.13 L 11.83 15.28 L 6.73 21.64 L 9.33 13.91 L 1.17 13.89 L 8.84 11.11 L 3.77 4.72 L 10.73 8.97 L 12.56 1.02 L 13.58 9.12 Z"
      }
    ]
  ]
};

export const XerograWeekend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 5.60 L 15.24 11.43 L 22.58 14.99 L 14.46 14.18 L 16.25 22.13 L 11.83 15.28 L 6.73 21.64 L 9.33 13.91 L 1.17 13.89 L 8.84 11.11 L 3.77 4.72 L 10.73 8.97 L 12.56 1.02 L 13.58 9.12 Z" />
      {children}
    </svg>
  );
});

export default XerograWeekend;
