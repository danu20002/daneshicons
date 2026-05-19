import React from 'react';

export const iconData = {
  "id": "ScudoNumber",
  "name": "ScudoNumber",
  "category": "IJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.08 14.52 L 20.62 15.66 L 19.91 16.47 L 20.74 18.94 L 23.00 15.99 L 23.00 18.17 L 23.00 19.74 L 20.20 17.28 L 20.34 16.30 L 18.92 18.43 L 16.12 19.05 L 18.39 19.94 L 20.08 20.65 L 21.96 17.77 L 23.00 15.36 L 22.46 13.15 L 23.00 16.12 L 23.00 13.23 L 23.00 12.43 L 23.00 14.44 L 23.00 14.63 L 20.04 13.83 L 22.44 14.54 L 20.04 12.19 L 22.07 14.75 L 21.63 12.03 L 23.00 10.22 L 23.00 12.80 L 23.00 10.97 L 23.00 11.37"
      }
    ]
  ]
};

export const ScudoNumber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.08 14.52 L 20.62 15.66 L 19.91 16.47 L 20.74 18.94 L 23.00 15.99 L 23.00 18.17 L 23.00 19.74 L 20.20 17.28 L 20.34 16.30 L 18.92 18.43 L 16.12 19.05 L 18.39 19.94 L 20.08 20.65 L 21.96 17.77 L 23.00 15.36 L 22.46 13.15 L 23.00 16.12 L 23.00 13.23 L 23.00 12.43 L 23.00 14.44 L 23.00 14.63 L 20.04 13.83 L 22.44 14.54 L 20.04 12.19 L 22.07 14.75 L 21.63 12.03 L 23.00 10.22 L 23.00 12.80 L 23.00 10.97 L 23.00 11.37" />
      {children}
    </svg>
  );
});

export default ScudoNumber;
