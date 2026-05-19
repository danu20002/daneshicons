import React from 'react';

export const iconData = {
  "id": "LensoPorcupine",
  "name": "LensoPorcupine",
  "category": "QK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.12 7.09 L 4.27 4.68 L 5.01 2.25 L 7.17 1.00 L 7.78 1.00 L 7.94 2.33 L 6.78 2.53 L 9.40 1.51 L 6.66 1.19 L 4.72 1.00 L 4.53 1.00 L 2.50 1.63 L 1.00 1.00 L 1.00 1.00 L 1.02 1.00 L 1.00 3.02 L 1.00 1.00 L 1.00 1.00 L 1.89 1.88 L 1.74 1.52 L 2.20 3.79 L 3.18 3.49 L 4.44 4.77 L 4.66 2.11 L 6.72 1.49 L 8.56 4.40 L 5.98 6.55 L 6.22 4.39 L 5.85 2.01 L 3.97 1.00 L 5.41 2.57 L 5.17 1.00 L 2.96 1.00"
      }
    ]
  ]
};

export const LensoPorcupine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.12 7.09 L 4.27 4.68 L 5.01 2.25 L 7.17 1.00 L 7.78 1.00 L 7.94 2.33 L 6.78 2.53 L 9.40 1.51 L 6.66 1.19 L 4.72 1.00 L 4.53 1.00 L 2.50 1.63 L 1.00 1.00 L 1.00 1.00 L 1.02 1.00 L 1.00 3.02 L 1.00 1.00 L 1.00 1.00 L 1.89 1.88 L 1.74 1.52 L 2.20 3.79 L 3.18 3.49 L 4.44 4.77 L 4.66 2.11 L 6.72 1.49 L 8.56 4.40 L 5.98 6.55 L 6.22 4.39 L 5.85 2.01 L 3.97 1.00 L 5.41 2.57 L 5.17 1.00 L 2.96 1.00" />
      {children}
    </svg>
  );
});

export default LensoPorcupine;
