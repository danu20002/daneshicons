import React from 'react';

export const iconData = {
  "id": "BioGesture",
  "name": "BioGesture",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.29 6.21 L 15.92 10.88 L 21.25 13.06 L 15.57 13.98 L 17.79 19.29 L 13.12 15.92 L 10.94 21.25 L 10.02 15.57 L 4.71 17.79 L 8.08 13.12 L 2.75 10.94 L 8.43 10.02 L 6.21 4.71 L 10.88 8.08 L 13.06 2.75 L 13.98 8.43 Z"
      }
    ]
  ]
};

export const BioGesture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.29 6.21 L 15.92 10.88 L 21.25 13.06 L 15.57 13.98 L 17.79 19.29 L 13.12 15.92 L 10.94 21.25 L 10.02 15.57 L 4.71 17.79 L 8.08 13.12 L 2.75 10.94 L 8.43 10.02 L 6.21 4.71 L 10.88 8.08 L 13.06 2.75 L 13.98 8.43 Z" />
      {children}
    </svg>
  );
});

export default BioGesture;
