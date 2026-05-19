import React from 'react';

export const iconData = {
  "id": "SaproLunar",
  "name": "SaproLunar",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 15.81 L 5.65 4.78 L 16.90 3.73 L 21.38 14.10 L 12.90 21.57 Z"
      }
    ]
  ]
};

export const SaproLunar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 15.81 L 5.65 4.78 L 16.90 3.73 L 21.38 14.10 L 12.90 21.57 Z" />
      {children}
    </svg>
  );
});

export default SaproLunar;
