import React from 'react';

export const iconData = {
  "id": "TabulaCamp",
  "name": "TabulaCamp",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.91 3.54 L 17.19 10.63 L 22.18 15.96 L 14.90 16.51 L 11.38 22.90 L 8.61 16.15 L 1.44 14.78 L 7.00 10.06 L 6.09 2.82 L 12.30 6.65 Z"
      }
    ]
  ]
};

export const TabulaCamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.91 3.54 L 17.19 10.63 L 22.18 15.96 L 14.90 16.51 L 11.38 22.90 L 8.61 16.15 L 1.44 14.78 L 7.00 10.06 L 6.09 2.82 L 12.30 6.65 Z" />
      {children}
    </svg>
  );
});

export default TabulaCamp;
