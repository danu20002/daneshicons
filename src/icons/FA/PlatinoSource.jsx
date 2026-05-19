import React from 'react';

export const iconData = {
  "id": "PlatinoSource",
  "name": "PlatinoSource",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.68 2.57 L 15.21 10.44 L 19.82 17.30 L 11.74 15.56 L 3.50 16.13 L 9.05 10.00 Z"
      }
    ]
  ]
};

export const PlatinoSource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.68 2.57 L 15.21 10.44 L 19.82 17.30 L 11.74 15.56 L 3.50 16.13 L 9.05 10.00 Z" />
      {children}
    </svg>
  );
});

export default PlatinoSource;
