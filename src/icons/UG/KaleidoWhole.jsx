import React from 'react';

export const iconData = {
  "id": "KaleidoWhole",
  "name": "KaleidoWhole",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.88 21.63 L 2.37 10.88 L 13.12 2.37 L 21.63 13.12 Z"
      }
    ]
  ]
};

export const KaleidoWhole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.88 21.63 L 2.37 10.88 L 13.12 2.37 L 21.63 13.12 Z" />
      {children}
    </svg>
  );
});

export default KaleidoWhole;
