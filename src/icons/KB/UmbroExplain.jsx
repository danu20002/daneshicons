import React from 'react';

export const iconData = {
  "id": "UmbroExplain",
  "name": "UmbroExplain",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.03 8.26 L 19.75 17.95 L 10.72 21.69 L 2.97 15.74 L 4.25 6.05 L 13.28 2.31 Z"
      }
    ]
  ]
};

export const UmbroExplain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.03 8.26 L 19.75 17.95 L 10.72 21.69 L 2.97 15.74 L 4.25 6.05 L 13.28 2.31 Z" />
      {children}
    </svg>
  );
});

export default UmbroExplain;
