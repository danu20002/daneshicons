import React from 'react';

export const iconData = {
  "id": "YachtPharmacy",
  "name": "YachtPharmacy",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.68 21.19 L 6.69 19.69 L 2.81 13.68 L 4.31 6.69 L 10.32 2.81 L 17.31 4.31 L 21.19 10.32 L 19.69 17.31 Z"
      }
    ]
  ]
};

export const YachtPharmacy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.68 21.19 L 6.69 19.69 L 2.81 13.68 L 4.31 6.69 L 10.32 2.81 L 17.31 4.31 L 21.19 10.32 L 19.69 17.31 Z" />
      {children}
    </svg>
  );
});

export default YachtPharmacy;
