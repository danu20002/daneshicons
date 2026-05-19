import React from 'react';

export const iconData = {
  "id": "VastoCharge",
  "name": "VastoCharge",
  "category": "AO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.22 3.72 L 18.40 4.89 L 20.74 15.89 L 11.00 21.51 L 2.65 13.99 Z"
      }
    ]
  ]
};

export const VastoCharge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.22 3.72 L 18.40 4.89 L 20.74 15.89 L 11.00 21.51 L 2.65 13.99 Z" />
      {children}
    </svg>
  );
});

export default VastoCharge;
