import React from 'react';

export const iconData = {
  "id": "ZannaRed",
  "name": "ZannaRed",
  "category": "HW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.03 3.62 L 15.46 2.89 L 21.28 9.02 L 20.11 17.40 L 12.84 21.71 L 4.93 18.71 L 2.35 10.66 Z"
      }
    ]
  ]
};

export const ZannaRed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.03 3.62 L 15.46 2.89 L 21.28 9.02 L 20.11 17.40 L 12.84 21.71 L 4.93 18.71 L 2.35 10.66 Z" />
      {children}
    </svg>
  );
});

export default ZannaRed;
