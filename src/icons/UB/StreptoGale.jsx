import React from 'react';

export const iconData = {
  "id": "StreptoGale",
  "name": "StreptoGale",
  "category": "UB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 15.74 L 5.73 14.28 L 3.19 13.76 L 1.00 12.37 L 2.98 11.58 L 2.21 9.66 L 2.60 7.31 L 1.56 9.87 L 1.00 9.55 L 1.71 11.40 L 1.30 11.60 L 1.00 13.48 L 1.00 15.24 L 1.00 18.12 L 1.00 18.47 L 2.33 21.13 L 1.00 18.40 L 1.00 16.62 L 3.94 14.59"
      }
    ]
  ]
};

export const StreptoGale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 15.74 L 5.73 14.28 L 3.19 13.76 L 1.00 12.37 L 2.98 11.58 L 2.21 9.66 L 2.60 7.31 L 1.56 9.87 L 1.00 9.55 L 1.71 11.40 L 1.30 11.60 L 1.00 13.48 L 1.00 15.24 L 1.00 18.12 L 1.00 18.47 L 2.33 21.13 L 1.00 18.40 L 1.00 16.62 L 3.94 14.59" />
      {children}
    </svg>
  );
});

export default StreptoGale;
