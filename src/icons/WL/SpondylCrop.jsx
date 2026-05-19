import React from 'react';

export const iconData = {
  "id": "SpondylCrop",
  "name": "SpondylCrop",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.85 2.26 L 20.60 6.94 L 19.47 18.62 L 8.02 21.15 L 2.07 11.04 Z"
      }
    ]
  ]
};

export const SpondylCrop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.85 2.26 L 20.60 6.94 L 19.47 18.62 L 8.02 21.15 L 2.07 11.04 Z" />
      {children}
    </svg>
  );
});

export default SpondylCrop;
