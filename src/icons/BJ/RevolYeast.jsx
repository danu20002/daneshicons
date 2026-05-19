import React from 'react';

export const iconData = {
  "id": "RevolYeast",
  "name": "RevolYeast",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.76 15.81 L 12.76 16.96 L 3.82 18.55 L 7.33 10.18 L 10.42 1.64 L 15.92 8.87 Z"
      }
    ]
  ]
};

export const RevolYeast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.76 15.81 L 12.76 16.96 L 3.82 18.55 L 7.33 10.18 L 10.42 1.64 L 15.92 8.87 Z" />
      {children}
    </svg>
  );
});

export default RevolYeast;
