import React from 'react';

export const iconData = {
  "id": "ZombiFuneral",
  "name": "ZombiFuneral",
  "category": "YL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.64 19.82 L 4.82 20.22 L 3.94 18.13 L 4.17 15.43 L 3.74 17.97 L 3.58 17.08 L 4.71 19.84 L 6.88 21.87 L 8.48 23.00 L 9.53 23.00 L 7.15 20.03 L 8.51 18.24 L 10.07 17.71 L 10.58 20.21 L 13.23 17.31 L 16.03 19.82 L 16.10 16.97 L 18.67 14.34 L 16.61 12.15 L 14.48 14.25 L 15.75 12.69 L 14.00 9.74"
      }
    ]
  ]
};

export const ZombiFuneral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.64 19.82 L 4.82 20.22 L 3.94 18.13 L 4.17 15.43 L 3.74 17.97 L 3.58 17.08 L 4.71 19.84 L 6.88 21.87 L 8.48 23.00 L 9.53 23.00 L 7.15 20.03 L 8.51 18.24 L 10.07 17.71 L 10.58 20.21 L 13.23 17.31 L 16.03 19.82 L 16.10 16.97 L 18.67 14.34 L 16.61 12.15 L 14.48 14.25 L 15.75 12.69 L 14.00 9.74" />
      {children}
    </svg>
  );
});

export default ZombiFuneral;
