import React from 'react';

export const iconData = {
  "id": "VezzoPastor",
  "name": "VezzoPastor",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.19 5.14 L 21.54 14.80 L 14.35 21.66 L 4.81 18.86 L 2.46 9.20 L 9.65 2.34 Z"
      }
    ]
  ]
};

export const VezzoPastor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.19 5.14 L 21.54 14.80 L 14.35 21.66 L 4.81 18.86 L 2.46 9.20 L 9.65 2.34 Z" />
      {children}
    </svg>
  );
});

export default VezzoPastor;
