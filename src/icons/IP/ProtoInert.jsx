import React from 'react';

export const iconData = {
  "id": "ProtoInert",
  "name": "ProtoInert",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 16.47 L 3.88 8.98 L 9.30 3.77 L 16.75 4.75 L 20.63 11.20 L 18.01 18.24 L 10.86 20.59 Z"
      }
    ]
  ]
};

export const ProtoInert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 16.47 L 3.88 8.98 L 9.30 3.77 L 16.75 4.75 L 20.63 11.20 L 18.01 18.24 L 10.86 20.59 Z" />
      {children}
    </svg>
  );
});

export default ProtoInert;
