import React from 'react';

export const iconData = {
  "id": "YankeeRosin",
  "name": "YankeeRosin",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.13 10.83 L 10.06 2.25 L 20.67 7.14 L 19.30 18.74 L 7.84 21.03 Z"
      }
    ]
  ]
};

export const YankeeRosin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.13 10.83 L 10.06 2.25 L 20.67 7.14 L 19.30 18.74 L 7.84 21.03 Z" />
      {children}
    </svg>
  );
});

export default YankeeRosin;
