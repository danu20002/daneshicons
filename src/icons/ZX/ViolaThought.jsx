import React from 'react';

export const iconData = {
  "id": "ViolaThought",
  "name": "ViolaThought",
  "category": "ZX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.15 3.34 L 19.11 1.98 L 19.02 1.41 L 18.67 1.00 L 20.49 1.00 L 19.25 1.00 L 17.56 1.00 L 14.68 3.16 L 13.65 3.02 L 14.94 5.90 L 12.30 4.77 L 10.23 7.45 L 11.68 6.25 L 9.27 3.40 L 11.89 5.05 L 11.48 7.56"
      }
    ],
    [
      "path",
      {
        "d": "M 15.57 3.09 L 13.91 3.19 L 15.86 4.72 L 17.40 4.76 L 20.31 7.50 L 20.97 6.30 L 21.09 9.04 L 20.91 10.64 L 21.06 8.66 L 23.00 10.26 L 21.27 7.69 L 22.36 6.74 L 19.83 7.25 L 22.30 8.93 L 23.00 10.76 L 20.92 8.51 L 18.12 11.43 L 17.30 10.52 L 15.03 7.61 L 16.45 4.99"
      }
    ]
  ]
};

export const ViolaThought = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.15 3.34 L 19.11 1.98 L 19.02 1.41 L 18.67 1.00 L 20.49 1.00 L 19.25 1.00 L 17.56 1.00 L 14.68 3.16 L 13.65 3.02 L 14.94 5.90 L 12.30 4.77 L 10.23 7.45 L 11.68 6.25 L 9.27 3.40 L 11.89 5.05 L 11.48 7.56" />
      <path d="M 15.57 3.09 L 13.91 3.19 L 15.86 4.72 L 17.40 4.76 L 20.31 7.50 L 20.97 6.30 L 21.09 9.04 L 20.91 10.64 L 21.06 8.66 L 23.00 10.26 L 21.27 7.69 L 22.36 6.74 L 19.83 7.25 L 22.30 8.93 L 23.00 10.76 L 20.92 8.51 L 18.12 11.43 L 17.30 10.52 L 15.03 7.61 L 16.45 4.99" />
      {children}
    </svg>
  );
});

export default ViolaThought;
