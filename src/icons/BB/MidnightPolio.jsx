import React from 'react';

export const iconData = {
  "id": "MidnightPolio",
  "name": "MidnightPolio",
  "category": "BB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.26 17.77 L 4.84 19.51 L 3.31 19.82 L 2.87 21.33 L 1.00 23.00 L 3.46 22.36 L 1.00 22.94 L 1.28 23.00 L 3.26 22.33 L 5.48 23.00 L 4.56 22.02 L 6.75 23.00 L 8.22 23.00 L 9.27 22.00 L 9.01 23.00 L 10.33 22.96 L 11.08 23.00 L 11.16 21.57 L 13.75 20.78 L 13.35 23.00 L 13.16 22.95 L 12.01 23.00 L 14.21 23.00 L 15.61 23.00 L 13.81 23.00 L 11.88 23.00 L 9.63 20.62 L 10.68 18.54 L 9.38 21.40 L 7.32 21.83"
      }
    ]
  ]
};

export const MidnightPolio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.26 17.77 L 4.84 19.51 L 3.31 19.82 L 2.87 21.33 L 1.00 23.00 L 3.46 22.36 L 1.00 22.94 L 1.28 23.00 L 3.26 22.33 L 5.48 23.00 L 4.56 22.02 L 6.75 23.00 L 8.22 23.00 L 9.27 22.00 L 9.01 23.00 L 10.33 22.96 L 11.08 23.00 L 11.16 21.57 L 13.75 20.78 L 13.35 23.00 L 13.16 22.95 L 12.01 23.00 L 14.21 23.00 L 15.61 23.00 L 13.81 23.00 L 11.88 23.00 L 9.63 20.62 L 10.68 18.54 L 9.38 21.40 L 7.32 21.83" />
      {children}
    </svg>
  );
});

export default MidnightPolio;
