import React from 'react';

export const iconData = {
  "id": "TaxoSorbet",
  "name": "TaxoSorbet",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 12.00 L 20.99 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.01 L 12.00 20.99"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 12.00 a 9.52 9.52 0 1 0 19.05 0 a 9.52 9.52 0 1 0 -19.05 0"
      }
    ]
  ]
};

export const TaxoSorbet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 12.00 L 20.99 12.00" />
      <path d="M 12.00 3.01 L 12.00 20.99" />
      <path d="M 2.48 12.00 a 9.52 9.52 0 1 0 19.05 0 a 9.52 9.52 0 1 0 -19.05 0" />
      {children}
    </svg>
  );
});

export default TaxoSorbet;
