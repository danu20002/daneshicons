import React from 'react';

export const iconData = {
  "id": "ZanellaHit",
  "name": "ZanellaHit",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 5.96 L 20.00 10.22 L 9.54 19.82 Z"
      }
    ]
  ]
};

export const ZanellaHit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 5.96 L 20.00 10.22 L 9.54 19.82 Z" />
      {children}
    </svg>
  );
});

export default ZanellaHit;
