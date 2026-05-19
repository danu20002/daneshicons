import React from 'react';

export const iconData = {
  "id": "PlutoFit",
  "name": "PlutoFit",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.20 20.79 L 7.83 14.09 L 1.49 11.38 L 8.11 9.44 L 7.29 2.59 L 12.28 7.35 L 17.80 3.21 L 16.17 9.91 L 22.51 12.62 L 15.89 14.56 L 16.71 21.41 L 11.72 16.65 Z"
      }
    ]
  ]
};

export const PlutoFit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.20 20.79 L 7.83 14.09 L 1.49 11.38 L 8.11 9.44 L 7.29 2.59 L 12.28 7.35 L 17.80 3.21 L 16.17 9.91 L 22.51 12.62 L 15.89 14.56 L 16.71 21.41 L 11.72 16.65 Z" />
      {children}
    </svg>
  );
});

export default PlutoFit;
