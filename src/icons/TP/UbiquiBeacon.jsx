import React from 'react';

export const iconData = {
  "id": "UbiquiBeacon",
  "name": "UbiquiBeacon",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 5.15 L 10.11 6.84 L 12.95 2.22 L 14.85 7.31 L 20.24 6.65 L 17.45 11.30 L 21.32 15.11 L 15.94 15.82 L 15.38 21.23 L 11.47 17.47 L 6.90 20.40 L 7.39 14.99 L 2.25 13.25 L 6.79 10.26 Z"
      }
    ]
  ]
};

export const UbiquiBeacon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 5.15 L 10.11 6.84 L 12.95 2.22 L 14.85 7.31 L 20.24 6.65 L 17.45 11.30 L 21.32 15.11 L 15.94 15.82 L 15.38 21.23 L 11.47 17.47 L 6.90 20.40 L 7.39 14.99 L 2.25 13.25 L 6.79 10.26 Z" />
      {children}
    </svg>
  );
});

export default UbiquiBeacon;
