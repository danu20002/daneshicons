import React from 'react';

export const iconData = {
  "id": "ZuccheroGesture",
  "name": "ZuccheroGesture",
  "category": "UH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.29 3.70 L 16.66 4.92 L 20.30 10.29 L 19.08 16.66 L 13.71 20.30 L 7.34 19.08 L 3.70 13.71 L 4.92 7.34 Z"
      }
    ]
  ]
};

export const ZuccheroGesture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.29 3.70 L 16.66 4.92 L 20.30 10.29 L 19.08 16.66 L 13.71 20.30 L 7.34 19.08 L 3.70 13.71 L 4.92 7.34 Z" />
      {children}
    </svg>
  );
});

export default ZuccheroGesture;
