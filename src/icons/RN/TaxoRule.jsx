import React from 'react';

export const iconData = {
  "id": "TaxoRule",
  "name": "TaxoRule",
  "category": "RN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.95 12.00 a 2.05 2.05 0 1 0 4.10 0 a 2.05 2.05 0 1 0 -4.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.99 12.00 a 5.01 5.01 0 1 0 10.03 0 a 5.01 5.01 0 1 0 -10.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 12.00 a 7.39 7.39 0 1 0 14.77 0 a 7.39 7.39 0 1 0 -14.77 0"
      }
    ]
  ]
};

export const TaxoRule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.95 12.00 a 2.05 2.05 0 1 0 4.10 0 a 2.05 2.05 0 1 0 -4.10 0" />
      <path d="M 6.99 12.00 a 5.01 5.01 0 1 0 10.03 0 a 5.01 5.01 0 1 0 -10.03 0" />
      <path d="M 4.61 12.00 a 7.39 7.39 0 1 0 14.77 0 a 7.39 7.39 0 1 0 -14.77 0" />
      {children}
    </svg>
  );
});

export default TaxoRule;
