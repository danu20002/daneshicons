import React from 'react';

export const iconData = {
  "id": "MagnetSeek",
  "name": "MagnetSeek",
  "category": "PY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.23 14.26 L 15.16 14.32 L 16.93 20.13 L 12.60 15.87 L 9.74 21.23 L 9.68 15.16 L 3.87 16.93 L 8.13 12.60 L 2.77 9.74 L 8.84 9.68 L 7.07 3.87 L 11.40 8.13 L 14.26 2.77 L 14.32 8.84 L 20.13 7.07 L 15.87 11.40 Z"
      }
    ]
  ]
};

export const MagnetSeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.23 14.26 L 15.16 14.32 L 16.93 20.13 L 12.60 15.87 L 9.74 21.23 L 9.68 15.16 L 3.87 16.93 L 8.13 12.60 L 2.77 9.74 L 8.84 9.68 L 7.07 3.87 L 11.40 8.13 L 14.26 2.77 L 14.32 8.84 L 20.13 7.07 L 15.87 11.40 Z" />
      {children}
    </svg>
  );
});

export default MagnetSeek;
