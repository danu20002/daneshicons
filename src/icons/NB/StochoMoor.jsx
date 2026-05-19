import React from 'react';

export const iconData = {
  "id": "StochoMoor",
  "name": "StochoMoor",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.13 5.59 L 15.06 11.56 L 21.61 15.84 L 13.91 14.43 L 13.49 22.24 L 10.85 14.87 L 3.87 18.41 L 8.94 12.44 L 2.39 8.16 L 10.09 9.57 L 10.51 1.76 L 13.15 9.13 Z"
      }
    ]
  ]
};

export const StochoMoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.13 5.59 L 15.06 11.56 L 21.61 15.84 L 13.91 14.43 L 13.49 22.24 L 10.85 14.87 L 3.87 18.41 L 8.94 12.44 L 2.39 8.16 L 10.09 9.57 L 10.51 1.76 L 13.15 9.13 Z" />
      {children}
    </svg>
  );
});

export default StochoMoor;
