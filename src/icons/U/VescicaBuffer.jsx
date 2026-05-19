import React from 'react';

export const iconData = {
  "id": "VescicaBuffer",
  "name": "VescicaBuffer",
  "category": "U",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.16 11.19 L 17.72 17.88 L 10.97 20.13 L 5.00 16.27 L 4.30 9.19 L 9.40 4.23 L 16.46 5.12 Z"
      }
    ]
  ]
};

export const VescicaBuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.16 11.19 L 17.72 17.88 L 10.97 20.13 L 5.00 16.27 L 4.30 9.19 L 9.40 4.23 L 16.46 5.12 Z" />
      {children}
    </svg>
  );
});

export default VescicaBuffer;
