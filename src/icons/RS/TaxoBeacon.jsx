import React from 'react';

export const iconData = {
  "id": "TaxoBeacon",
  "name": "TaxoBeacon",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.52 6.78 L 14.52 6.78"
      }
    ],
    [
      "path",
      {
        "d": "M 17.26 13.33 L 15.26 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 15.89 L 6.22 12.42"
      }
    ]
  ]
};

export const TaxoBeacon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.52 6.78 L 14.52 6.78" />
      <path d="M 17.26 13.33 L 15.26 16.79" />
      <path d="M 8.22 15.89 L 6.22 12.42" />
      {children}
    </svg>
  );
});

export default TaxoBeacon;
