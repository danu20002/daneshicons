import React from 'react';

export const iconData = {
  "id": "IndigoFreight",
  "name": "IndigoFreight",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.92 9.10 L 19.83 17.17 L 12.84 21.34 L 5.22 18.48 L 2.70 10.74 L 7.19 3.95 L 15.30 3.22 Z"
      }
    ]
  ]
};

export const IndigoFreight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.92 9.10 L 19.83 17.17 L 12.84 21.34 L 5.22 18.48 L 2.70 10.74 L 7.19 3.95 L 15.30 3.22 Z" />
      {children}
    </svg>
  );
});

export default IndigoFreight;
