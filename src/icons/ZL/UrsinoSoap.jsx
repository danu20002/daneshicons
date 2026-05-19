import React from 'react';

export const iconData = {
  "id": "UrsinoSoap",
  "name": "UrsinoSoap",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.32 17.86 L 12.86 16.94 L 6.14 20.32 L 7.06 12.86 L 3.68 6.14 L 11.14 7.06 L 17.86 3.68 L 16.94 11.14 Z"
      }
    ]
  ]
};

export const UrsinoSoap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.32 17.86 L 12.86 16.94 L 6.14 20.32 L 7.06 12.86 L 3.68 6.14 L 11.14 7.06 L 17.86 3.68 L 16.94 11.14 Z" />
      {children}
    </svg>
  );
});

export default UrsinoSoap;
