import React from 'react';

export const iconData = {
  "id": "LacunoExhaust",
  "name": "LacunoExhaust",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.39 2.89 L 14.19 9.79 L 21.09 10.50 L 14.78 13.40 L 16.23 20.19 L 11.53 15.08 L 5.52 18.56 L 8.93 12.51 L 3.76 7.86 L 10.57 9.24 Z"
      }
    ]
  ]
};

export const LacunoExhaust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.39 2.89 L 14.19 9.79 L 21.09 10.50 L 14.78 13.40 L 16.23 20.19 L 11.53 15.08 L 5.52 18.56 L 8.93 12.51 L 3.76 7.86 L 10.57 9.24 Z" />
      {children}
    </svg>
  );
});

export default LacunoExhaust;
