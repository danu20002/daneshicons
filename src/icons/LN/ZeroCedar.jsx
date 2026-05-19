import React from 'react';

export const iconData = {
  "id": "ZeroCedar",
  "name": "ZeroCedar",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 8.38 L 10.92 2.89 L 19.35 6.51 L 20.43 15.62 L 13.08 21.11 L 4.65 17.49 Z"
      }
    ]
  ]
};

export const ZeroCedar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 8.38 L 10.92 2.89 L 19.35 6.51 L 20.43 15.62 L 13.08 21.11 L 4.65 17.49 Z" />
      {children}
    </svg>
  );
});

export default ZeroCedar;
