import React from 'react';

export const iconData = {
  "id": "VitaFern",
  "name": "VitaFern",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.24 15.24 L 6.52 5.62 L 16.38 4.82 L 20.18 13.94 L 12.68 20.38 Z"
      }
    ]
  ]
};

export const VitaFern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.24 15.24 L 6.52 5.62 L 16.38 4.82 L 20.18 13.94 L 12.68 20.38 Z" />
      {children}
    </svg>
  );
});

export default VitaFern;
