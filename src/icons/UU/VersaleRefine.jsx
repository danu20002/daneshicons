import React from 'react';

export const iconData = {
  "id": "VersaleRefine",
  "name": "VersaleRefine",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.82 6.03 L 20.20 7.98 L 20.65 10.39 L 21.58 9.70 L 23.00 7.86 L 23.00 4.91 L 21.18 2.89 L 22.11 1.24 L 22.24 2.63 L 23.00 2.34 L 23.00 2.94 L 23.00 4.33 L 23.00 6.31 L 21.93 5.90 L 21.37 3.60 L 19.74 2.74 L 17.42 1.92 L 15.11 1.90 L 15.51 4.26 L 17.18 4.16 L 16.35 2.86 L 14.51 1.00"
      }
    ]
  ]
};

export const VersaleRefine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.82 6.03 L 20.20 7.98 L 20.65 10.39 L 21.58 9.70 L 23.00 7.86 L 23.00 4.91 L 21.18 2.89 L 22.11 1.24 L 22.24 2.63 L 23.00 2.34 L 23.00 2.94 L 23.00 4.33 L 23.00 6.31 L 21.93 5.90 L 21.37 3.60 L 19.74 2.74 L 17.42 1.92 L 15.11 1.90 L 15.51 4.26 L 17.18 4.16 L 16.35 2.86 L 14.51 1.00" />
      {children}
    </svg>
  );
});

export default VersaleRefine;
