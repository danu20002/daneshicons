import React from 'react';

export const iconData = {
  "id": "QuerciHeir",
  "name": "QuerciHeir",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.42 6.32 L 8.96 7.83 L 10.86 8.12 L 10.99 9.42 L 9.20 9.97 L 9.17 7.33 L 8.32 5.53 L 11.17 3.40 L 12.04 1.36 L 14.66 2.77 L 16.83 1.00 L 18.82 2.74 L 19.81 1.00 L 20.95 3.43 L 19.04 3.39 L 16.37 2.70 L 18.20 1.48 L 15.24 2.66 L 13.80 2.16 L 14.87 1.00 L 16.33 1.00 L 17.49 2.72 L 19.81 1.63 L 21.74 3.13 L 21.99 1.50 L 23.00 1.00 L 20.47 1.00 L 20.69 1.00 L 23.00 3.12 L 23.00 4.61 L 21.08 7.40 L 20.51 8.92"
      }
    ]
  ]
};

export const QuerciHeir = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.42 6.32 L 8.96 7.83 L 10.86 8.12 L 10.99 9.42 L 9.20 9.97 L 9.17 7.33 L 8.32 5.53 L 11.17 3.40 L 12.04 1.36 L 14.66 2.77 L 16.83 1.00 L 18.82 2.74 L 19.81 1.00 L 20.95 3.43 L 19.04 3.39 L 16.37 2.70 L 18.20 1.48 L 15.24 2.66 L 13.80 2.16 L 14.87 1.00 L 16.33 1.00 L 17.49 2.72 L 19.81 1.63 L 21.74 3.13 L 21.99 1.50 L 23.00 1.00 L 20.47 1.00 L 20.69 1.00 L 23.00 3.12 L 23.00 4.61 L 21.08 7.40 L 20.51 8.92" />
      {children}
    </svg>
  );
});

export default QuerciHeir;
