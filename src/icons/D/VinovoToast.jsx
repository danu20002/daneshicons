import React from 'react';

export const iconData = {
  "id": "VinovoToast",
  "name": "VinovoToast",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 22.10 L 8.96 14.75 L 1.74 13.11 L 8.44 9.96 L 7.78 2.58 L 12.84 7.98 L 19.65 5.07 L 16.08 11.56 L 20.95 17.14 L 13.68 15.75 Z"
      }
    ]
  ]
};

export const VinovoToast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 22.10 L 8.96 14.75 L 1.74 13.11 L 8.44 9.96 L 7.78 2.58 L 12.84 7.98 L 19.65 5.07 L 16.08 11.56 L 20.95 17.14 L 13.68 15.75 Z" />
      {children}
    </svg>
  );
});

export default VinovoToast;
