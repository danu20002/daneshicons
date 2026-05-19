import React from 'react';

export const iconData = {
  "id": "QuasiDrip",
  "name": "QuasiDrip",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.66 22.06 L 11.23 16.36 L 5.12 20.20 L 7.84 13.51 L 1.46 10.14 L 8.61 9.16 L 8.34 1.94 L 12.77 7.64 L 18.88 3.80 L 16.16 10.49 L 22.54 13.86 L 15.39 14.84 Z"
      }
    ]
  ]
};

export const QuasiDrip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.66 22.06 L 11.23 16.36 L 5.12 20.20 L 7.84 13.51 L 1.46 10.14 L 8.61 9.16 L 8.34 1.94 L 12.77 7.64 L 18.88 3.80 L 16.16 10.49 L 22.54 13.86 L 15.39 14.84 Z" />
      {children}
    </svg>
  );
});

export default QuasiDrip;
