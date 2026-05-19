import React from 'react';

export const iconData = {
  "id": "VitaMinion",
  "name": "VitaMinion",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.31 5.93 L 19.41 15.17 L 11.27 20.03 L 4.14 13.79 L 7.87 5.08 Z"
      }
    ]
  ]
};

export const VitaMinion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.31 5.93 L 19.41 15.17 L 11.27 20.03 L 4.14 13.79 L 7.87 5.08 Z" />
      {children}
    </svg>
  );
});

export default VitaMinion;
