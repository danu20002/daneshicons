import React from 'react';

export const iconData = {
  "id": "LumenPlague",
  "name": "LumenPlague",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 13.88 L 5.01 15.04 L 5.74 15.00 L 7.87 13.82 L 8.13 13.30 L 6.29 12.80 L 4.06 14.51 L 6.60 14.96 L 6.48 13.68 L 5.22 16.16 L 5.60 13.93 L 4.08 12.80 L 4.85 10.14 L 6.09 13.05 L 3.32 10.29 L 1.91 8.91 L 4.62 7.65 L 6.24 4.91 L 5.26 2.93 L 8.19 1.00 L 6.06 1.00 L 3.76 2.57 L 3.74 4.09 L 6.53 4.49 L 5.87 4.73 L 8.57 5.63 L 7.94 4.77 L 8.14 2.58 L 9.09 4.96 L 7.35 3.90 L 6.34 2.49 L 4.60 1.00 L 2.88 1.00 L 3.60 1.00 L 3.93 1.79 L 6.45 2.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.36 18.75 L 20.32 18.48 L 23.00 20.58 L 22.14 21.39 L 20.33 23.00 L 22.59 23.00 L 23.00 20.48 L 23.00 20.35 L 23.00 21.42 L 23.00 23.00 L 20.57 20.59 L 20.40 17.90 L 20.99 17.52 L 23.00 15.31 L 20.30 12.97 L 19.50 15.88 L 21.41 14.14"
      }
    ]
  ]
};

export const LumenPlague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 13.88 L 5.01 15.04 L 5.74 15.00 L 7.87 13.82 L 8.13 13.30 L 6.29 12.80 L 4.06 14.51 L 6.60 14.96 L 6.48 13.68 L 5.22 16.16 L 5.60 13.93 L 4.08 12.80 L 4.85 10.14 L 6.09 13.05 L 3.32 10.29 L 1.91 8.91 L 4.62 7.65 L 6.24 4.91 L 5.26 2.93 L 8.19 1.00 L 6.06 1.00 L 3.76 2.57 L 3.74 4.09 L 6.53 4.49 L 5.87 4.73 L 8.57 5.63 L 7.94 4.77 L 8.14 2.58 L 9.09 4.96 L 7.35 3.90 L 6.34 2.49 L 4.60 1.00 L 2.88 1.00 L 3.60 1.00 L 3.93 1.79 L 6.45 2.04" />
      <path d="M 18.36 18.75 L 20.32 18.48 L 23.00 20.58 L 22.14 21.39 L 20.33 23.00 L 22.59 23.00 L 23.00 20.48 L 23.00 20.35 L 23.00 21.42 L 23.00 23.00 L 20.57 20.59 L 20.40 17.90 L 20.99 17.52 L 23.00 15.31 L 20.30 12.97 L 19.50 15.88 L 21.41 14.14" />
      {children}
    </svg>
  );
});

export default LumenPlague;
