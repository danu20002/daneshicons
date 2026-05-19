import React from 'react';

export const iconData = {
  "id": "CycloGimmick",
  "name": "CycloGimmick",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.81 14.30 6.75 9.37 Q 9.76 9.84 12.76 10.32 Q 15.90 15.00 19.04 19.69 Q 11.96 19.46 4.87 19.23 Z"
      }
    ]
  ]
};

export const CycloGimmick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.81 14.30 6.75 9.37 Q 9.76 9.84 12.76 10.32 Q 15.90 15.00 19.04 19.69 Q 11.96 19.46 4.87 19.23 Z" />
      {children}
    </svg>
  );
});

export default CycloGimmick;
