import React from 'react';

export const iconData = {
  "id": "XerofiloRequire",
  "name": "XerofiloRequire",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.42 15.47 C 13.06 2.49, 3.96 6.95, 4.85 5.48"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 21.46 L 16.93 15.40"
      }
    ]
  ]
};

export const XerofiloRequire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.42 15.47 C 13.06 2.49, 3.96 6.95, 4.85 5.48" />
      <path d="M 3.04 21.46 L 16.93 15.40" />
      {children}
    </svg>
  );
});

export default XerofiloRequire;
