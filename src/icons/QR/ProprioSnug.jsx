import React from 'react';

export const iconData = {
  "id": "ProprioSnug",
  "name": "ProprioSnug",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 17.25 L 8.62 11.88 L 4.60 6.22 L 11.07 8.75 L 15.21 3.18 L 14.80 10.11 L 21.38 12.33 L 14.66 14.08 L 14.59 21.03 L 10.84 15.18 Z"
      }
    ]
  ]
};

export const ProprioSnug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 17.25 L 8.62 11.88 L 4.60 6.22 L 11.07 8.75 L 15.21 3.18 L 14.80 10.11 L 21.38 12.33 L 14.66 14.08 L 14.59 21.03 L 10.84 15.18 Z" />
      {children}
    </svg>
  );
});

export default ProprioSnug;
