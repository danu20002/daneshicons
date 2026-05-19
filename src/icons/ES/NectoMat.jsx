import React from 'react';

export const iconData = {
  "id": "NectoMat",
  "name": "NectoMat",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.39 6.29 L 7.13 9.22 L 6.14 6.89 L 8.86 3.95 L 7.82 6.18 L 5.23 8.29 L 8.13 6.01 L 9.19 7.04 L 8.30 9.04 L 7.52 7.54 L 5.07 9.66 L 4.98 8.44 L 7.52 7.76 L 4.58 8.18 L 6.60 8.21 L 5.96 7.80"
      }
    ]
  ]
};

export const NectoMat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.39 6.29 L 7.13 9.22 L 6.14 6.89 L 8.86 3.95 L 7.82 6.18 L 5.23 8.29 L 8.13 6.01 L 9.19 7.04 L 8.30 9.04 L 7.52 7.54 L 5.07 9.66 L 4.98 8.44 L 7.52 7.76 L 4.58 8.18 L 6.60 8.21 L 5.96 7.80" />
      {children}
    </svg>
  );
});

export default NectoMat;
