import React from 'react';

export const iconData = {
  "id": "OzoFinance",
  "name": "OzoFinance",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.69 6.13 L 12.65 3.41 L 19.13 7.15 L 20.23 14.55 L 15.14 20.03 L 7.68 19.46 L 3.48 13.28 Z"
      }
    ]
  ]
};

export const OzoFinance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.69 6.13 L 12.65 3.41 L 19.13 7.15 L 20.23 14.55 L 15.14 20.03 L 7.68 19.46 L 3.48 13.28 Z" />
      {children}
    </svg>
  );
});

export default OzoFinance;
