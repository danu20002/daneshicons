import React from 'react';

export const iconData = {
  "id": "XenotimFlat",
  "name": "XenotimFlat",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.39 17.69 L 13.95 15.54 L 11.76 22.97 L 9.90 15.46 L 2.38 17.28 L 7.96 11.91 L 2.61 6.31 L 10.05 8.46 L 12.24 1.03 L 14.10 8.54 L 21.62 6.72 L 16.04 12.09 Z"
      }
    ]
  ]
};

export const XenotimFlat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.39 17.69 L 13.95 15.54 L 11.76 22.97 L 9.90 15.46 L 2.38 17.28 L 7.96 11.91 L 2.61 6.31 L 10.05 8.46 L 12.24 1.03 L 14.10 8.54 L 21.62 6.72 L 16.04 12.09 Z" />
      {children}
    </svg>
  );
});

export default XenotimFlat;
