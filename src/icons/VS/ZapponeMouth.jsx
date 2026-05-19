import React from 'react';

export const iconData = {
  "id": "ZapponeMouth",
  "name": "ZapponeMouth",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.16 11.88 L 12.12 20.16 L 3.84 12.12 L 11.88 3.84 Z"
      }
    ]
  ]
};

export const ZapponeMouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.16 11.88 L 12.12 20.16 L 3.84 12.12 L 11.88 3.84 Z" />
      {children}
    </svg>
  );
});

export default ZapponeMouth;
