import React from 'react';

export const iconData = {
  "id": "GastroRefuse",
  "name": "GastroRefuse",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.57 3.18 L 16.22 10.32 L 22.10 14.57 L 14.90 15.49 L 12.68 22.40 L 9.57 15.84 L 2.31 15.86 L 7.60 10.88 L 5.34 3.98 L 11.70 7.47 Z"
      }
    ]
  ]
};

export const GastroRefuse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.57 3.18 L 16.22 10.32 L 22.10 14.57 L 14.90 15.49 L 12.68 22.40 L 9.57 15.84 L 2.31 15.86 L 7.60 10.88 L 5.34 3.98 L 11.70 7.47 Z" />
      {children}
    </svg>
  );
});

export default GastroRefuse;
