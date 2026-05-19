import React from 'react';

export const iconData = {
  "id": "TantoLoan",
  "name": "TantoLoan",
  "category": "ZX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.09 4.94 L 10.90 6.68 L 13.11 8.29 L 10.18 9.53 L 12.27 11.57 L 10.14 10.31 L 7.32 11.69 L 5.11 13.29 L 3.33 12.99 L 1.00 13.31 L 1.00 16.27 L 1.00 18.37 L 3.86 18.84 L 1.54 21.53 L 1.21 22.75 L 1.00 23.00 L 1.00 23.00 L 1.39 23.00 L 2.30 22.03 L 1.00 20.12 L 1.59 22.42 L 3.58 22.98 L 4.32 23.00 L 6.60 21.29"
      }
    ]
  ]
};

export const TantoLoan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.09 4.94 L 10.90 6.68 L 13.11 8.29 L 10.18 9.53 L 12.27 11.57 L 10.14 10.31 L 7.32 11.69 L 5.11 13.29 L 3.33 12.99 L 1.00 13.31 L 1.00 16.27 L 1.00 18.37 L 3.86 18.84 L 1.54 21.53 L 1.21 22.75 L 1.00 23.00 L 1.00 23.00 L 1.39 23.00 L 2.30 22.03 L 1.00 20.12 L 1.59 22.42 L 3.58 22.98 L 4.32 23.00 L 6.60 21.29" />
      {children}
    </svg>
  );
});

export default TantoLoan;
