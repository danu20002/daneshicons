import React from 'react';

export const iconData = {
  "id": "ZenitViper",
  "name": "ZenitViper",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.38 21.31 L 4.13 16.98 L 3.75 7.67 L 11.62 2.69 L 19.87 7.02 L 20.25 16.33 Z"
      }
    ]
  ]
};

export const ZenitViper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.38 21.31 L 4.13 16.98 L 3.75 7.67 L 11.62 2.69 L 19.87 7.02 L 20.25 16.33 Z" />
      {children}
    </svg>
  );
});

export default ZenitViper;
