import React from 'react';

export const iconData = {
  "id": "TitoloThirst",
  "name": "TitoloThirst",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.41 7.34 L 9.95 4.19 L 15.45 4.70 L 19.33 8.63 L 19.79 14.13 L 16.60 18.64 L 11.26 20.04 L 6.26 17.68 L 3.95 12.66 Z"
      }
    ]
  ]
};

export const TitoloThirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.41 7.34 L 9.95 4.19 L 15.45 4.70 L 19.33 8.63 L 19.79 14.13 L 16.60 18.64 L 11.26 20.04 L 6.26 17.68 L 3.95 12.66 Z" />
      {children}
    </svg>
  );
});

export default TitoloThirst;
