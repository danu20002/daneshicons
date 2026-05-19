import React from 'react';

export const iconData = {
  "id": "RefleKazoo",
  "name": "RefleKazoo",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.12 20.94 L 8.33 15.86 L 3.21 15.33 L 6.70 11.54 L 3.92 7.21 L 9.05 7.57 L 10.71 2.69 L 13.63 6.93 L 18.47 5.19 L 16.98 10.11 L 21.36 12.81 L 16.58 14.72 L 17.20 19.83 L 12.73 17.27 Z"
      }
    ]
  ]
};

export const RefleKazoo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.12 20.94 L 8.33 15.86 L 3.21 15.33 L 6.70 11.54 L 3.92 7.21 L 9.05 7.57 L 10.71 2.69 L 13.63 6.93 L 18.47 5.19 L 16.98 10.11 L 21.36 12.81 L 16.58 14.72 L 17.20 19.83 L 12.73 17.27 Z" />
      {children}
    </svg>
  );
});

export default RefleKazoo;
