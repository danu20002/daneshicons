import React from 'react';

export const iconData = {
  "id": "ZoccoloQuirk",
  "name": "ZoccoloQuirk",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.54 3.92 L 20.52 9.73 L 19.09 17.24 L 12.32 20.81 L 5.31 17.74 L 3.34 10.35 L 7.89 4.20 Z"
      }
    ]
  ]
};

export const ZoccoloQuirk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.54 3.92 L 20.52 9.73 L 19.09 17.24 L 12.32 20.81 L 5.31 17.74 L 3.34 10.35 L 7.89 4.20 Z" />
      {children}
    </svg>
  );
});

export default ZoccoloQuirk;
