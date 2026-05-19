import React from 'react';

export const iconData = {
  "id": "ZimoYacht",
  "name": "ZimoYacht",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.71 3.86 L 19.20 15.82 L 5.09 16.32 Z"
      }
    ]
  ]
};

export const ZimoYacht = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.71 3.86 L 19.20 15.82 L 5.09 16.32 Z" />
      {children}
    </svg>
  );
});

export default ZimoYacht;
