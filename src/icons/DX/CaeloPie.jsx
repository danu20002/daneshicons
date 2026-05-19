import React from 'react';

export const iconData = {
  "id": "CaeloPie",
  "name": "CaeloPie",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.62 9.87 17.13 6.21 Q 17.90 10.91 18.67 15.61 Q 19.21 17.89 19.75 20.18 Q 12.93 16.85 6.10 13.52 Z"
      }
    ]
  ]
};

export const CaeloPie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.62 9.87 17.13 6.21 Q 17.90 10.91 18.67 15.61 Q 19.21 17.89 19.75 20.18 Q 12.93 16.85 6.10 13.52 Z" />
      {children}
    </svg>
  );
});

export default CaeloPie;
