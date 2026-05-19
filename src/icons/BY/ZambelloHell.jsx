import React from 'react';

export const iconData = {
  "id": "ZambelloHell",
  "name": "ZambelloHell",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.79 17.92 L 6.08 4.79 L 19.21 6.08 L 17.92 19.21 Z"
      }
    ]
  ]
};

export const ZambelloHell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.79 17.92 L 6.08 4.79 L 19.21 6.08 L 17.92 19.21 Z" />
      {children}
    </svg>
  );
});

export default ZambelloHell;
