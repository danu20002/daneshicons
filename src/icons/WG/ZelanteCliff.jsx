import React from 'react';

export const iconData = {
  "id": "ZelanteCliff",
  "name": "ZelanteCliff",
  "category": "WG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.79 4.56 L 5.22 6.55 L 6.41 5.00 L 8.11 4.17 L 8.55 2.47 L 6.40 1.00 L 5.41 2.56 L 6.10 1.00 L 8.24 3.39 L 9.97 3.04 L 7.04 3.26 L 6.15 2.61 L 4.08 4.87 L 1.32 6.89 L 1.03 6.50 L 2.44 4.73 L 4.42 6.61 L 6.07 7.29 L 4.61 9.41 L 4.92 9.71 L 5.71 10.40 L 5.87 10.01 L 3.50 9.65 L 1.84 8.75 L 3.65 8.66 L 5.09 7.02 L 2.42 8.00 L 1.00 8.34 L 1.00 5.83"
      }
    ]
  ]
};

export const ZelanteCliff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.79 4.56 L 5.22 6.55 L 6.41 5.00 L 8.11 4.17 L 8.55 2.47 L 6.40 1.00 L 5.41 2.56 L 6.10 1.00 L 8.24 3.39 L 9.97 3.04 L 7.04 3.26 L 6.15 2.61 L 4.08 4.87 L 1.32 6.89 L 1.03 6.50 L 2.44 4.73 L 4.42 6.61 L 6.07 7.29 L 4.61 9.41 L 4.92 9.71 L 5.71 10.40 L 5.87 10.01 L 3.50 9.65 L 1.84 8.75 L 3.65 8.66 L 5.09 7.02 L 2.42 8.00 L 1.00 8.34 L 1.00 5.83" />
      {children}
    </svg>
  );
});

export default ZelanteCliff;
