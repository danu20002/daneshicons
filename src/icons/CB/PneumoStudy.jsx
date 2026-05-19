import React from 'react';

export const iconData = {
  "id": "PneumoStudy",
  "name": "PneumoStudy",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.72 11.35 L 8.63 9.73 L 7.93 3.64 L 12.29 7.95 L 17.20 4.29 L 15.65 10.22 L 21.28 12.65 L 15.37 14.27 L 16.07 20.36 L 11.71 16.05 L 6.80 19.71 L 8.35 13.78 Z"
      }
    ]
  ]
};

export const PneumoStudy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.72 11.35 L 8.63 9.73 L 7.93 3.64 L 12.29 7.95 L 17.20 4.29 L 15.65 10.22 L 21.28 12.65 L 15.37 14.27 L 16.07 20.36 L 11.71 16.05 L 6.80 19.71 L 8.35 13.78 Z" />
      {children}
    </svg>
  );
});

export default PneumoStudy;
