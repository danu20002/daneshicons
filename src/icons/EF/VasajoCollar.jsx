import React from 'react';

export const iconData = {
  "id": "VasajoCollar",
  "name": "VasajoCollar",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 13.70 L 5.53 6.61 L 12.18 3.58 L 18.69 6.89 L 20.17 14.05 L 15.49 19.66 L 8.19 19.51 Z"
      }
    ]
  ]
};

export const VasajoCollar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 13.70 L 5.53 6.61 L 12.18 3.58 L 18.69 6.89 L 20.17 14.05 L 15.49 19.66 L 8.19 19.51 Z" />
      {children}
    </svg>
  );
});

export default VasajoCollar;
