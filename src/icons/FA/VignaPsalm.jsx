import React from 'react';

export const iconData = {
  "id": "VignaPsalm",
  "name": "VignaPsalm",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.06 12.69 L 9.83 8.73 L 16.87 2.18 L 15.92 11.75 L 18.07 21.13 L 10.26 15.51 Z"
      }
    ]
  ]
};

export const VignaPsalm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.06 12.69 L 9.83 8.73 L 16.87 2.18 L 15.92 11.75 L 18.07 21.13 L 10.26 15.51 Z" />
      {children}
    </svg>
  );
});

export default VignaPsalm;
