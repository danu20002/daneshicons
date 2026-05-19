import React from 'react';

export const iconData = {
  "id": "TaxoPastry",
  "name": "TaxoPastry",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.39 17.17 L 3.72 8.00 L 11.33 2.83 L 19.61 6.83 L 20.28 16.00 L 12.67 21.17 Z"
      }
    ]
  ]
};

export const TaxoPastry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.39 17.17 L 3.72 8.00 L 11.33 2.83 L 19.61 6.83 L 20.28 16.00 L 12.67 21.17 Z" />
      {children}
    </svg>
  );
});

export default TaxoPastry;
