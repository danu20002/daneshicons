import React from 'react';

export const iconData = {
  "id": "QuasiKnit",
  "name": "QuasiKnit",
  "category": "JV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 5.08 L 4.43 6.93 L 4.86 4.05 L 6.93 1.90 L 6.09 4.54 L 3.18 3.19 L 3.37 3.29 L 4.43 4.97 L 6.40 4.70 L 7.08 1.95 L 6.54 1.55 L 6.51 1.00 L 7.29 3.11 L 7.53 2.40 L 8.65 3.40 L 6.06 2.33 L 8.70 4.83 L 11.19 6.21 L 13.93 4.22 L 15.09 5.66 L 17.18 6.71 L 17.36 9.26 L 20.05 9.64 L 19.51 10.04 L 18.18 7.30 L 19.08 6.26 L 21.38 3.54 L 22.48 5.06 L 20.22 2.46 L 17.59 5.39 L 15.80 8.18 L 14.86 8.52 L 16.69 6.32 L 18.04 8.48 L 18.43 10.73"
      }
    ]
  ]
};

export const QuasiKnit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 5.08 L 4.43 6.93 L 4.86 4.05 L 6.93 1.90 L 6.09 4.54 L 3.18 3.19 L 3.37 3.29 L 4.43 4.97 L 6.40 4.70 L 7.08 1.95 L 6.54 1.55 L 6.51 1.00 L 7.29 3.11 L 7.53 2.40 L 8.65 3.40 L 6.06 2.33 L 8.70 4.83 L 11.19 6.21 L 13.93 4.22 L 15.09 5.66 L 17.18 6.71 L 17.36 9.26 L 20.05 9.64 L 19.51 10.04 L 18.18 7.30 L 19.08 6.26 L 21.38 3.54 L 22.48 5.06 L 20.22 2.46 L 17.59 5.39 L 15.80 8.18 L 14.86 8.52 L 16.69 6.32 L 18.04 8.48 L 18.43 10.73" />
      {children}
    </svg>
  );
});

export default QuasiKnit;
