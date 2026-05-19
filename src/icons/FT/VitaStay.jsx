import React from 'react';

export const iconData = {
  "id": "VitaStay",
  "name": "VitaStay",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.15 4.52 L 17.82 10.93 L 19.48 17.15 L 13.07 17.82 L 6.85 19.48 L 6.18 13.07 L 4.52 6.85 L 10.93 6.18 Z"
      }
    ]
  ]
};

export const VitaStay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.15 4.52 L 17.82 10.93 L 19.48 17.15 L 13.07 17.82 L 6.85 19.48 L 6.18 13.07 L 4.52 6.85 L 10.93 6.18 Z" />
      {children}
    </svg>
  );
});

export default VitaStay;
