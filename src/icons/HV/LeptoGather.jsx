import React from 'react';

export const iconData = {
  "id": "LeptoGather",
  "name": "LeptoGather",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.21 8.75 L 15.25 4.21 L 19.79 15.25 L 8.75 19.79 Z"
      }
    ]
  ]
};

export const LeptoGather = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.21 8.75 L 15.25 4.21 L 19.79 15.25 L 8.75 19.79 Z" />
      {children}
    </svg>
  );
});

export default LeptoGather;
