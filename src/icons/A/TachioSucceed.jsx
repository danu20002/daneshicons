import React from 'react';

export const iconData = {
  "id": "TachioSucceed",
  "name": "TachioSucceed",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.92 9.01 L 14.99 19.92 L 4.08 14.99 L 9.01 4.08 Z"
      }
    ]
  ]
};

export const TachioSucceed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.92 9.01 L 14.99 19.92 L 4.08 14.99 L 9.01 4.08 Z" />
      {children}
    </svg>
  );
});

export default TachioSucceed;
