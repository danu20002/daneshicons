import React from 'react';

export const iconData = {
  "id": "ValgoGum",
  "name": "ValgoGum",
  "category": "ZX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.43 12.03 L 17.97 12.49 L 16.90 13.64 L 16.86 15.14 L 15.08 13.36 L 13.90 10.83 L 11.20 8.29 L 13.58 6.57 L 14.26 7.82 L 17.03 6.23 L 19.86 4.76 L 19.65 4.70 L 20.93 4.73 L 21.02 6.94 L 22.12 8.60 L 19.30 6.92 L 19.89 8.34 L 20.75 9.59"
      }
    ]
  ]
};

export const ValgoGum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.43 12.03 L 17.97 12.49 L 16.90 13.64 L 16.86 15.14 L 15.08 13.36 L 13.90 10.83 L 11.20 8.29 L 13.58 6.57 L 14.26 7.82 L 17.03 6.23 L 19.86 4.76 L 19.65 4.70 L 20.93 4.73 L 21.02 6.94 L 22.12 8.60 L 19.30 6.92 L 19.89 8.34 L 20.75 9.59" />
      {children}
    </svg>
  );
});

export default ValgoGum;
