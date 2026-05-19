import React from 'react';

export const iconData = {
  "id": "ZirconeFront",
  "name": "ZirconeFront",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.85 6.30 L 20.87 12.82 L 17.70 18.85 L 11.18 20.87 L 5.15 17.70 L 3.13 11.18 L 6.30 5.15 L 12.82 3.13 Z"
      }
    ]
  ]
};

export const ZirconeFront = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.85 6.30 L 20.87 12.82 L 17.70 18.85 L 11.18 20.87 L 5.15 17.70 L 3.13 11.18 L 6.30 5.15 L 12.82 3.13 Z" />
      {children}
    </svg>
  );
});

export default ZirconeFront;
