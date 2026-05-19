import React from 'react';

export const iconData = {
  "id": "CryoDexter",
  "name": "CryoDexter",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 14.13 L 4.88 7.89 L 9.87 4.06 L 16.11 4.88 L 19.94 9.87 L 19.12 16.11 L 14.13 19.94 L 7.89 19.12 Z"
      }
    ]
  ]
};

export const CryoDexter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 14.13 L 4.88 7.89 L 9.87 4.06 L 16.11 4.88 L 19.94 9.87 L 19.12 16.11 L 14.13 19.94 L 7.89 19.12 Z" />
      {children}
    </svg>
  );
});

export default CryoDexter;
