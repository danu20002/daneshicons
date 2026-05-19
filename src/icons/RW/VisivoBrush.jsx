import React from 'react';

export const iconData = {
  "id": "VisivoBrush",
  "name": "VisivoBrush",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.39 L 9.54 9.48 L 9.91 8.18 L 11.51 9.20 L 11.13 8.05 L 9.19 8.18 L 10.27 6.27 L 9.69 5.78 L 12.61 5.56 L 15.03 7.71 L 14.41 6.18 L 12.12 5.78 L 11.43 5.35 L 9.99 4.26 L 7.84 5.78 L 10.22 5.92 L 8.18 3.88 L 10.27 6.54 L 12.47 4.24 L 15.18 4.02 L 16.32 5.36"
      }
    ]
  ]
};

export const VisivoBrush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.39 L 9.54 9.48 L 9.91 8.18 L 11.51 9.20 L 11.13 8.05 L 9.19 8.18 L 10.27 6.27 L 9.69 5.78 L 12.61 5.56 L 15.03 7.71 L 14.41 6.18 L 12.12 5.78 L 11.43 5.35 L 9.99 4.26 L 7.84 5.78 L 10.22 5.92 L 8.18 3.88 L 10.27 6.54 L 12.47 4.24 L 15.18 4.02 L 16.32 5.36" />
      {children}
    </svg>
  );
});

export default VisivoBrush;
