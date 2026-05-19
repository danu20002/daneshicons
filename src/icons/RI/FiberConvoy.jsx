import React from 'react';

export const iconData = {
  "id": "FiberConvoy",
  "name": "FiberConvoy",
  "category": "RI",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.07 4.45 L 21.68 12.04 L 18.01 19.59 L 9.81 21.43 L 3.26 16.17 L 3.29 7.76 L 9.88 2.55 Z"
      }
    ]
  ]
};

export const FiberConvoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.07 4.45 L 21.68 12.04 L 18.01 19.59 L 9.81 21.43 L 3.26 16.17 L 3.29 7.76 L 9.88 2.55 Z" />
      {children}
    </svg>
  );
});

export default FiberConvoy;
