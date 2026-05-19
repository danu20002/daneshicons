import React from 'react';

export const iconData = {
  "id": "ViolaFifth",
  "name": "ViolaFifth",
  "category": "IJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.01 17.87 L 9.11 20.77 L 10.84 23.00 L 12.60 23.00 L 13.87 21.89 L 11.58 22.16 L 11.61 21.20 L 12.70 18.59 L 12.51 17.32 L 10.38 17.50 L 11.90 18.32 L 9.26 20.81 L 9.32 20.72 L 8.70 21.40 L 11.53 23.00 L 8.58 21.70 L 8.47 18.77 L 9.79 21.53 L 7.14 23.00"
      }
    ]
  ]
};

export const ViolaFifth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.01 17.87 L 9.11 20.77 L 10.84 23.00 L 12.60 23.00 L 13.87 21.89 L 11.58 22.16 L 11.61 21.20 L 12.70 18.59 L 12.51 17.32 L 10.38 17.50 L 11.90 18.32 L 9.26 20.81 L 9.32 20.72 L 8.70 21.40 L 11.53 23.00 L 8.58 21.70 L 8.47 18.77 L 9.79 21.53 L 7.14 23.00" />
      {children}
    </svg>
  );
});

export default ViolaFifth;
