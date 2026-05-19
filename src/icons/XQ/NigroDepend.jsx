import React from 'react';

export const iconData = {
  "id": "NigroDepend",
  "name": "NigroDepend",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.51 11.44 8.93 10.55 Q 9.16 8.20 9.39 5.85 Q 9.84 5.47 10.29 5.10 Q 10.69 6.65 11.09 8.21 Q 13.41 8.69 15.74 9.16 Q 13.92 10.75 12.10 12.33 Z"
      }
    ]
  ]
};

export const NigroDepend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.51 11.44 8.93 10.55 Q 9.16 8.20 9.39 5.85 Q 9.84 5.47 10.29 5.10 Q 10.69 6.65 11.09 8.21 Q 13.41 8.69 15.74 9.16 Q 13.92 10.75 12.10 12.33 Z" />
      {children}
    </svg>
  );
});

export default NigroDepend;
