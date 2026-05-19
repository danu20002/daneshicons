import React from 'react';

export const iconData = {
  "id": "ZampinoStatue",
  "name": "ZampinoStatue",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.29 3.62 L 18.73 7.01 L 20.10 14.15 L 15.37 19.67 L 8.10 19.42 L 3.77 13.58 L 5.63 6.55 Z"
      }
    ]
  ]
};

export const ZampinoStatue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.29 3.62 L 18.73 7.01 L 20.10 14.15 L 15.37 19.67 L 8.10 19.42 L 3.77 13.58 L 5.63 6.55 Z" />
      {children}
    </svg>
  );
});

export default ZampinoStatue;
