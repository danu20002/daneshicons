import React from 'react';

export const iconData = {
  "id": "AviXenon",
  "name": "AviXenon",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.50 7.85 L 12.01 10.52 L 11.84 8.44 L 8.96 5.67 L 8.68 7.37 L 7.15 4.67 L 5.35 2.29 L 5.96 1.41 L 5.10 1.00 L 5.15 1.00 L 3.76 1.00 L 1.91 3.38 L 4.35 5.03 L 6.98 6.09 L 5.79 7.14 L 7.61 7.58 L 5.68 6.91 L 4.84 7.57 L 2.55 8.35 L 1.00 6.71 L 3.32 6.98 L 1.51 9.86 L 3.39 10.72 L 5.73 11.09 L 7.15 8.43 L 4.92 8.72 L 1.98 8.25 L 3.92 8.04 L 6.68 7.18 L 4.77 10.18 L 2.28 11.34 L 1.00 8.43"
      }
    ]
  ]
};

export const AviXenon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.50 7.85 L 12.01 10.52 L 11.84 8.44 L 8.96 5.67 L 8.68 7.37 L 7.15 4.67 L 5.35 2.29 L 5.96 1.41 L 5.10 1.00 L 5.15 1.00 L 3.76 1.00 L 1.91 3.38 L 4.35 5.03 L 6.98 6.09 L 5.79 7.14 L 7.61 7.58 L 5.68 6.91 L 4.84 7.57 L 2.55 8.35 L 1.00 6.71 L 3.32 6.98 L 1.51 9.86 L 3.39 10.72 L 5.73 11.09 L 7.15 8.43 L 4.92 8.72 L 1.98 8.25 L 3.92 8.04 L 6.68 7.18 L 4.77 10.18 L 2.28 11.34 L 1.00 8.43" />
      {children}
    </svg>
  );
});

export default AviXenon;
