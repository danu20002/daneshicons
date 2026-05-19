import React from 'react';

export const iconData = {
  "id": "UrinoFun",
  "name": "UrinoFun",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 2.68 L 19.24 12.00 L 12.00 21.32 L 4.76 12.00 Z"
      }
    ]
  ]
};

export const UrinoFun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 2.68 L 19.24 12.00 L 12.00 21.32 L 4.76 12.00 Z" />
      {children}
    </svg>
  );
});

export default UrinoFun;
