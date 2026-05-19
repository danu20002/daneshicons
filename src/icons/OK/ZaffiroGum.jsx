import React from 'react';

export const iconData = {
  "id": "ZaffiroGum",
  "name": "ZaffiroGum",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.18 19.01 L 4.99 7.18 L 16.82 4.99 L 19.01 16.82 Z"
      }
    ]
  ]
};

export const ZaffiroGum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.18 19.01 L 4.99 7.18 L 16.82 4.99 L 19.01 16.82 Z" />
      {children}
    </svg>
  );
});

export default ZaffiroGum;
