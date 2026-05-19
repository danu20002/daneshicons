import React from 'react';

export const iconData = {
  "id": "CataHeal",
  "name": "CataHeal",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.36 4.28 L 21.51 10.98 L 8.13 20.74 Z"
      }
    ]
  ]
};

export const CataHeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.36 4.28 L 21.51 10.98 L 8.13 20.74 Z" />
      {children}
    </svg>
  );
});

export default CataHeal;
