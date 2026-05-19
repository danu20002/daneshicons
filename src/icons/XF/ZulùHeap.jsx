import React from 'react';

export const iconData = {
  "id": "ZulùHeap",
  "name": "ZulùHeap",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 8.41 L 7.30 3.38 L 13.94 2.37 L 19.68 5.88 L 21.82 12.24 L 19.36 18.50 L 13.46 21.71 L 6.88 20.38 L 2.69 15.13 Z"
      }
    ]
  ]
};

export const ZulùHeap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 8.41 L 7.30 3.38 L 13.94 2.37 L 19.68 5.88 L 21.82 12.24 L 19.36 18.50 L 13.46 21.71 L 6.88 20.38 L 2.69 15.13 Z" />
      {children}
    </svg>
  );
});

export default ZulùHeap;
