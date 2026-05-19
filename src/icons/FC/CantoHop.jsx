import React from 'react';

export const iconData = {
  "id": "CantoHop",
  "name": "CantoHop",
  "category": "FC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 12.00 a 6.37 6.37 0 1 0 12.74 0 a 6.37 6.37 0 1 0 -12.74 0"
      }
    ]
  ]
};

export const CantoHop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 12.00 a 2.38 2.38 0 1 0 4.76 0 a 2.38 2.38 0 1 0 -4.76 0" stroke-dasharray="3 2" />
      <path d="M 5.63 12.00 a 6.37 6.37 0 1 0 12.74 0 a 6.37 6.37 0 1 0 -12.74 0" />
      {children}
    </svg>
  );
});

export default CantoHop;
