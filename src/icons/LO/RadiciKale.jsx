import React from 'react';

export const iconData = {
  "id": "RadiciKale",
  "name": "RadiciKale",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.96 20.55 L 8.49 14.84 L 2.79 14.17 L 7.58 11.03 L 4.56 6.16 L 10.01 7.94 L 11.93 2.54 L 13.93 7.91 L 19.35 6.05 L 16.40 10.96 L 21.24 14.04 L 15.56 14.79 L 16.17 20.49 L 12.03 16.52 Z"
      }
    ]
  ]
};

export const RadiciKale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.96 20.55 L 8.49 14.84 L 2.79 14.17 L 7.58 11.03 L 4.56 6.16 L 10.01 7.94 L 11.93 2.54 L 13.93 7.91 L 19.35 6.05 L 16.40 10.96 L 21.24 14.04 L 15.56 14.79 L 16.17 20.49 L 12.03 16.52 Z" />
      {children}
    </svg>
  );
});

export default RadiciKale;
