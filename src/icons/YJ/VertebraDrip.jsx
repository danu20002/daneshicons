import React from 'react';

export const iconData = {
  "id": "VertebraDrip",
  "name": "VertebraDrip",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.60 12.03 4.27 8.04 Q 5.15 6.83 6.04 5.62 Q 12.15 8.16 18.25 10.71 Q 18.98 12.98 19.71 15.25 Q 12.32 15.63 4.94 16.01 Z"
      }
    ]
  ]
};

export const VertebraDrip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.60 12.03 4.27 8.04 Q 5.15 6.83 6.04 5.62 Q 12.15 8.16 18.25 10.71 Q 18.98 12.98 19.71 15.25 Q 12.32 15.63 4.94 16.01 Z" />
      {children}
    </svg>
  );
});

export default VertebraDrip;
