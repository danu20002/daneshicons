import React from 'react';

export const iconData = {
  "id": "NeuroTogether",
  "name": "NeuroTogether",
  "category": "CN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 19.88 L 4.35 19.03 L 3.05 21.52 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 2.63 21.27 L 4.75 20.54 L 2.87 18.21 L 1.24 17.48 L 2.44 19.01 L 2.54 18.26 L 2.24 19.41 L 3.64 18.99 L 4.25 21.59 L 6.49 19.68 L 4.26 16.76 L 7.04 14.62 L 8.93 17.61 L 8.58 19.95 L 9.56 19.05 L 11.72 20.83 L 10.61 22.38 L 11.27 21.97 L 8.58 23.00 L 8.17 20.30 L 9.76 19.83 L 10.83 21.87 L 8.13 20.25 L 8.26 21.57 L 9.38 19.01 L 10.39 17.24 L 8.21 15.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.63 4.17 L 13.02 2.68 L 14.88 3.75 L 17.31 4.40 L 18.01 4.34 L 19.49 5.91 L 21.46 5.39 L 22.13 5.58 L 20.36 3.35 L 20.96 5.33 L 23.00 3.91 L 23.00 4.72 L 21.23 7.39 L 18.63 6.76 L 16.29 7.86 L 17.87 5.17 L 16.06 4.50 L 15.76 3.75"
      }
    ]
  ]
};

export const NeuroTogether = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 19.88 L 4.35 19.03 L 3.05 21.52 L 1.00 23.00 L 1.00 23.00 L 1.00 23.00 L 2.63 21.27 L 4.75 20.54 L 2.87 18.21 L 1.24 17.48 L 2.44 19.01 L 2.54 18.26 L 2.24 19.41 L 3.64 18.99 L 4.25 21.59 L 6.49 19.68 L 4.26 16.76 L 7.04 14.62 L 8.93 17.61 L 8.58 19.95 L 9.56 19.05 L 11.72 20.83 L 10.61 22.38 L 11.27 21.97 L 8.58 23.00 L 8.17 20.30 L 9.76 19.83 L 10.83 21.87 L 8.13 20.25 L 8.26 21.57 L 9.38 19.01 L 10.39 17.24 L 8.21 15.03" />
      <path d="M 12.63 4.17 L 13.02 2.68 L 14.88 3.75 L 17.31 4.40 L 18.01 4.34 L 19.49 5.91 L 21.46 5.39 L 22.13 5.58 L 20.36 3.35 L 20.96 5.33 L 23.00 3.91 L 23.00 4.72 L 21.23 7.39 L 18.63 6.76 L 16.29 7.86 L 17.87 5.17 L 16.06 4.50 L 15.76 3.75" />
      {children}
    </svg>
  );
});

export default NeuroTogether;
