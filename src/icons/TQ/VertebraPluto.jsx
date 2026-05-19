import React from 'react';

export const iconData = {
  "id": "VertebraPluto",
  "name": "VertebraPluto",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.25 18.29 L 11.26 15.81 L 2.93 15.14 L 9.06 9.45 L 13.82 2.57 L 15.67 10.73 Z"
      }
    ]
  ]
};

export const VertebraPluto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.25 18.29 L 11.26 15.81 L 2.93 15.14 L 9.06 9.45 L 13.82 2.57 L 15.67 10.73 Z" />
      {children}
    </svg>
  );
});

export default VertebraPluto;
