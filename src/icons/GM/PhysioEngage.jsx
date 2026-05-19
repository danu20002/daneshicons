import React from 'react';

export const iconData = {
  "id": "PhysioEngage",
  "name": "PhysioEngage",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 18.51 L 6.52 12.64 L 2.00 7.69 L 8.70 7.58 L 10.73 1.19 L 14.18 6.93 L 20.73 5.49 L 17.48 11.36 L 22.00 16.31 L 15.30 16.42 L 13.27 22.81 L 9.82 17.07 Z"
      }
    ]
  ]
};

export const PhysioEngage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 18.51 L 6.52 12.64 L 2.00 7.69 L 8.70 7.58 L 10.73 1.19 L 14.18 6.93 L 20.73 5.49 L 17.48 11.36 L 22.00 16.31 L 15.30 16.42 L 13.27 22.81 L 9.82 17.07 Z" />
      {children}
    </svg>
  );
});

export default PhysioEngage;
