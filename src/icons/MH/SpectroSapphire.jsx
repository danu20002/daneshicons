import React from 'react';

export const iconData = {
  "id": "SpectroSapphire",
  "name": "SpectroSapphire",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.37 4.50 L 11.20 8.09 L 15.18 2.51 L 14.99 9.36 L 21.81 10.00 L 15.78 13.27 L 18.63 19.50 L 12.80 15.91 L 8.82 21.49 L 9.01 14.64 L 2.19 14.00 L 8.22 10.73 Z"
      }
    ]
  ]
};

export const SpectroSapphire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.37 4.50 L 11.20 8.09 L 15.18 2.51 L 14.99 9.36 L 21.81 10.00 L 15.78 13.27 L 18.63 19.50 L 12.80 15.91 L 8.82 21.49 L 9.01 14.64 L 2.19 14.00 L 8.22 10.73 Z" />
      {children}
    </svg>
  );
});

export default SpectroSapphire;
