import React from 'react';

export const iconData = {
  "id": "StochoEdition",
  "name": "StochoEdition",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.26 19.92 L 13.59 17.65 L 16.19 17.75 L 19.04 18.65 L 19.55 19.75 L 22.24 19.64 L 23.00 19.58 L 22.78 18.84 L 22.87 19.75 L 23.00 17.10 L 21.72 17.79 L 22.29 20.47 L 20.98 18.12 L 22.33 17.37 L 21.66 15.91 L 20.96 15.47 L 22.70 16.29 L 23.00 15.90 L 21.05 18.84 L 23.00 18.65 L 21.61 18.09 L 22.51 15.46 L 20.96 15.83"
      }
    ]
  ]
};

export const StochoEdition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.26 19.92 L 13.59 17.65 L 16.19 17.75 L 19.04 18.65 L 19.55 19.75 L 22.24 19.64 L 23.00 19.58 L 22.78 18.84 L 22.87 19.75 L 23.00 17.10 L 21.72 17.79 L 22.29 20.47 L 20.98 18.12 L 22.33 17.37 L 21.66 15.91 L 20.96 15.47 L 22.70 16.29 L 23.00 15.90 L 21.05 18.84 L 23.00 18.65 L 21.61 18.09 L 22.51 15.46 L 20.96 15.83" />
      {children}
    </svg>
  );
});

export default StochoEdition;
