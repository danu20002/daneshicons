import React from 'react';

export const iconData = {
  "id": "VisieraBuffer",
  "name": "VisieraBuffer",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.22 9.94 3.52 4.29 Q 10.57 9.87 17.63 15.45 Q 17.76 16.17 17.89 16.89 Q 16.37 18.03 14.85 19.17 Q 10.57 18.18 6.29 17.20 Q 8.17 15.32 10.04 13.45 Q 8.48 14.52 6.93 15.59 Z"
      }
    ]
  ]
};

export const VisieraBuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.22 9.94 3.52 4.29 Q 10.57 9.87 17.63 15.45 Q 17.76 16.17 17.89 16.89 Q 16.37 18.03 14.85 19.17 Q 10.57 18.18 6.29 17.20 Q 8.17 15.32 10.04 13.45 Q 8.48 14.52 6.93 15.59 Z" />
      {children}
    </svg>
  );
});

export default VisieraBuffer;
