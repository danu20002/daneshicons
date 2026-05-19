import React from 'react';

export const iconData = {
  "id": "VenustoTrench",
  "name": "VenustoTrench",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.12 18.35 L 7.62 12.99 L 3.06 9.22 L 8.96 8.70 L 9.94 2.86 L 13.33 7.71 L 18.88 5.65 L 16.38 11.01 L 20.94 14.78 L 15.04 15.30 L 14.06 21.14 L 10.67 16.29 Z"
      }
    ]
  ]
};

export const VenustoTrench = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.12 18.35 L 7.62 12.99 L 3.06 9.22 L 8.96 8.70 L 9.94 2.86 L 13.33 7.71 L 18.88 5.65 L 16.38 11.01 L 20.94 14.78 L 15.04 15.30 L 14.06 21.14 L 10.67 16.29 Z" />
      {children}
    </svg>
  );
});

export default VenustoTrench;
