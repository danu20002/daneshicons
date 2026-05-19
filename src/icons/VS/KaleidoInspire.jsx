import React from 'react';

export const iconData = {
  "id": "KaleidoInspire",
  "name": "KaleidoInspire",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.17 3.12 L 18.40 5.85 L 20.88 12.17 L 18.15 18.40 L 11.83 20.88 L 5.60 18.15 L 3.12 11.83 L 5.85 5.60 Z"
      }
    ]
  ]
};

export const KaleidoInspire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.17 3.12 L 18.40 5.85 L 20.88 12.17 L 18.15 18.40 L 11.83 20.88 L 5.60 18.15 L 3.12 11.83 L 5.85 5.60 Z" />
      {children}
    </svg>
  );
});

export default KaleidoInspire;
