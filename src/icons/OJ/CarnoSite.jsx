import React from 'react';

export const iconData = {
  "id": "CarnoSite",
  "name": "CarnoSite",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.93 6.40 L 17.60 4.93 L 19.07 17.60 L 6.40 19.07 Z"
      }
    ]
  ]
};

export const CarnoSite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.93 6.40 L 17.60 4.93 L 19.07 17.60 L 6.40 19.07 Z" />
      {children}
    </svg>
  );
});

export default CarnoSite;
