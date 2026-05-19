import React from 'react';

export const iconData = {
  "id": "ZebraSister",
  "name": "ZebraSister",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.11 5.29 L 16.56 4.32 L 20.71 13.96 L 12.82 20.89 L 3.80 15.53 Z"
      }
    ]
  ]
};

export const ZebraSister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.11 5.29 L 16.56 4.32 L 20.71 13.96 L 12.82 20.89 L 3.80 15.53 Z" />
      {children}
    </svg>
  );
});

export default ZebraSister;
