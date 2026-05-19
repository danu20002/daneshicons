import React from 'react';

export const iconData = {
  "id": "ProtoPatron",
  "name": "ProtoPatron",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.96 19.07 L 2.71 11.69 L 6.45 4.54 L 14.37 3.01 L 20.51 8.25 L 20.24 16.31 L 13.76 21.13 Z"
      }
    ]
  ]
};

export const ProtoPatron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.96 19.07 L 2.71 11.69 L 6.45 4.54 L 14.37 3.01 L 20.51 8.25 L 20.24 16.31 L 13.76 21.13 Z" />
      {children}
    </svg>
  );
});

export default ProtoPatron;
