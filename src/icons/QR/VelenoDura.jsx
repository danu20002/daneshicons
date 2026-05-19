import React from 'react';

export const iconData = {
  "id": "VelenoDura",
  "name": "VelenoDura",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.26 4.75 L 17.56 10.70 L 20.83 15.71 L 14.96 16.89 L 11.20 21.54 L 8.27 16.32 L 2.68 14.18 L 6.74 9.79 L 7.04 3.81 L 12.48 6.31 Z"
      }
    ]
  ]
};

export const VelenoDura = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.26 4.75 L 17.56 10.70 L 20.83 15.71 L 14.96 16.89 L 11.20 21.54 L 8.27 16.32 L 2.68 14.18 L 6.74 9.79 L 7.04 3.81 L 12.48 6.31 Z" />
      {children}
    </svg>
  );
});

export default VelenoDura;
