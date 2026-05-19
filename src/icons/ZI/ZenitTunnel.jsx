import React from 'react';

export const iconData = {
  "id": "ZenitTunnel",
  "name": "ZenitTunnel",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.37 6.33 L 13.22 21.22 L 3.40 8.45 Z"
      }
    ]
  ]
};

export const ZenitTunnel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.37 6.33 L 13.22 21.22 L 3.40 8.45 Z" />
      {children}
    </svg>
  );
});

export default ZenitTunnel;
