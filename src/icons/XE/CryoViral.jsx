import React from 'react';

export const iconData = {
  "id": "CryoViral",
  "name": "CryoViral",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 18.01 L 9.56 4.19 L 19.98 13.79 Z"
      }
    ]
  ]
};

export const CryoViral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 18.01 L 9.56 4.19 L 19.98 13.79 Z" />
      {children}
    </svg>
  );
});

export default CryoViral;
