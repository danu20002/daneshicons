import React from 'react';

export const iconData = {
  "id": "VongolaTriumph",
  "name": "VongolaTriumph",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.75 2.38 L 15.46 9.29 L 22.00 11.64 L 15.65 14.46 L 15.43 21.40 L 10.79 16.23 L 4.12 18.17 L 7.60 12.16 L 3.70 6.41 L 10.49 7.87 Z"
      }
    ]
  ]
};

export const VongolaTriumph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.75 2.38 L 15.46 9.29 L 22.00 11.64 L 15.65 14.46 L 15.43 21.40 L 10.79 16.23 L 4.12 18.17 L 7.60 12.16 L 3.70 6.41 L 10.49 7.87 Z" />
      {children}
    </svg>
  );
});

export default VongolaTriumph;
