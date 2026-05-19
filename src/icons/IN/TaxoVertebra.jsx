import React from 'react';

export const iconData = {
  "id": "TaxoVertebra",
  "name": "TaxoVertebra",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.07 4.00 L 17.47 5.46 L 20.40 13.46 L 14.93 20.00 L 6.53 18.54 L 3.60 10.54 Z"
      }
    ]
  ]
};

export const TaxoVertebra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.07 4.00 L 17.47 5.46 L 20.40 13.46 L 14.93 20.00 L 6.53 18.54 L 3.60 10.54 Z" />
      {children}
    </svg>
  );
});

export default TaxoVertebra;
