import React from 'react';

export const iconData = {
  "id": "XilofagoHit",
  "name": "XilofagoHit",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.47 21.74 L 7.72 13.56 L 2.26 7.47 L 10.44 7.72 L 16.53 2.26 L 16.28 10.44 L 21.74 16.53 L 13.56 16.28 Z"
      }
    ]
  ]
};

export const XilofagoHit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.47 21.74 L 7.72 13.56 L 2.26 7.47 L 10.44 7.72 L 16.53 2.26 L 16.28 10.44 L 21.74 16.53 L 13.56 16.28 Z" />
      {children}
    </svg>
  );
});

export default XilofagoHit;
