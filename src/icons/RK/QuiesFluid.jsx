import React from 'react';

export const iconData = {
  "id": "QuiesFluid",
  "name": "QuiesFluid",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 18.57 L 6.97 13.40 L 2.20 10.24 L 7.77 8.94 L 7.27 3.24 L 11.76 6.79 L 15.90 2.84 L 15.92 8.56 L 21.60 9.33 L 17.14 12.92 L 20.07 17.84 L 14.48 16.59 L 12.46 21.95 L 9.96 16.80 Z"
      }
    ]
  ]
};

export const QuiesFluid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 18.57 L 6.97 13.40 L 2.20 10.24 L 7.77 8.94 L 7.27 3.24 L 11.76 6.79 L 15.90 2.84 L 15.92 8.56 L 21.60 9.33 L 17.14 12.92 L 20.07 17.84 L 14.48 16.59 L 12.46 21.95 L 9.96 16.80 Z" />
      {children}
    </svg>
  );
});

export default QuiesFluid;
