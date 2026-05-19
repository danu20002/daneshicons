import React from 'react';

export const iconData = {
  "id": "PontoJune",
  "name": "PontoJune",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.15 15.03 L 14.68 15.01 L 13.95 21.44 L 10.73 15.82 L 4.80 18.41 L 8.06 12.81 L 2.85 8.97 L 9.32 8.99 L 10.05 2.56 L 13.27 8.18 L 19.20 5.59 L 15.94 11.19 Z"
      }
    ]
  ]
};

export const PontoJune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.15 15.03 L 14.68 15.01 L 13.95 21.44 L 10.73 15.82 L 4.80 18.41 L 8.06 12.81 L 2.85 8.97 L 9.32 8.99 L 10.05 2.56 L 13.27 8.18 L 19.20 5.59 L 15.94 11.19 Z" />
      {children}
    </svg>
  );
});

export default PontoJune;
