import React from 'react';

export const iconData = {
  "id": "ZelanteDay",
  "name": "ZelanteDay",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.12 20.22 L 9.10 20.72 L 3.78 16.12 L 3.28 9.10 L 7.88 3.78 L 14.90 3.28 L 20.22 7.88 L 20.72 14.90 Z"
      }
    ]
  ]
};

export const ZelanteDay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.12 20.22 L 9.10 20.72 L 3.78 16.12 L 3.28 9.10 L 7.88 3.78 L 14.90 3.28 L 20.22 7.88 L 20.72 14.90 Z" />
      {children}
    </svg>
  );
});

export default ZelanteDay;
