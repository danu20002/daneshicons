import React from 'react';

export const iconData = {
  "id": "TruncoCapri",
  "name": "TruncoCapri",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.79 7.59 L 9.58 8.09 L 11.71 2.69 L 14.17 7.95 L 19.92 7.10 L 16.59 11.86 L 20.21 16.41 L 14.42 15.91 L 12.29 21.31 L 9.83 16.05 L 4.08 16.90 L 7.41 12.14 Z"
      }
    ]
  ]
};

export const TruncoCapri = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.79 7.59 L 9.58 8.09 L 11.71 2.69 L 14.17 7.95 L 19.92 7.10 L 16.59 11.86 L 20.21 16.41 L 14.42 15.91 L 12.29 21.31 L 9.83 16.05 L 4.08 16.90 L 7.41 12.14 Z" />
      {children}
    </svg>
  );
});

export default TruncoCapri;
