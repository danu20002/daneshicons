import React from 'react';

export const iconData = {
  "id": "VetroOzone",
  "name": "VetroOzone",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.10 7.31 L 10.48 8.25 L 10.76 6.11 L 9.99 3.43 L 10.44 1.64 L 9.39 2.67 L 9.48 3.26 L 11.60 3.08 L 13.99 2.96 L 14.74 2.53 L 17.21 4.75 L 17.12 7.73 L 15.55 7.55 L 16.68 4.84 L 19.37 6.44 L 21.13 7.36"
      }
    ]
  ]
};

export const VetroOzone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.10 7.31 L 10.48 8.25 L 10.76 6.11 L 9.99 3.43 L 10.44 1.64 L 9.39 2.67 L 9.48 3.26 L 11.60 3.08 L 13.99 2.96 L 14.74 2.53 L 17.21 4.75 L 17.12 7.73 L 15.55 7.55 L 16.68 4.84 L 19.37 6.44 L 21.13 7.36" />
      {children}
    </svg>
  );
});

export default VetroOzone;
