import React from 'react';

export const iconData = {
  "id": "ZolfoCharge",
  "name": "ZolfoCharge",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 10.05 L 8.45 4.41 L 15.72 4.49 L 20.19 10.22 L 18.49 17.29 L 11.91 20.38 L 5.39 17.15 Z"
      }
    ]
  ]
};

export const ZolfoCharge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 10.05 L 8.45 4.41 L 15.72 4.49 L 20.19 10.22 L 18.49 17.29 L 11.91 20.38 L 5.39 17.15 Z" />
      {children}
    </svg>
  );
});

export default ZolfoCharge;
