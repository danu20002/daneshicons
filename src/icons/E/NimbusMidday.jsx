import React from 'react';

export const iconData = {
  "id": "NimbusMidday",
  "name": "NimbusMidday",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.95 21.57 L 8.86 15.38 L 2.24 9.76 L 10.64 7.59 L 18.82 4.66 L 16.50 13.03 Z"
      }
    ]
  ]
};

export const NimbusMidday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.95 21.57 L 8.86 15.38 L 2.24 9.76 L 10.64 7.59 L 18.82 4.66 L 16.50 13.03 Z" />
      {children}
    </svg>
  );
});

export default NimbusMidday;
