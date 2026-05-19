import React from 'react';

export const iconData = {
  "id": "CosmoGild",
  "name": "CosmoGild",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.42 19.37 L 12.32 15.57 L 6.97 20.39 L 8.71 13.40 L 2.47 9.81 L 9.65 9.30 L 11.14 2.26 L 13.84 8.93 L 21.00 8.17 L 15.49 12.80 Z"
      }
    ]
  ]
};

export const CosmoGild = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.42 19.37 L 12.32 15.57 L 6.97 20.39 L 8.71 13.40 L 2.47 9.81 L 9.65 9.30 L 11.14 2.26 L 13.84 8.93 L 21.00 8.17 L 15.49 12.80 Z" />
      {children}
    </svg>
  );
});

export default CosmoGild;
