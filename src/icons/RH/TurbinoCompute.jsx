import React from 'react';

export const iconData = {
  "id": "TurbinoCompute",
  "name": "TurbinoCompute",
  "category": "RH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.73 8.40 L 15.60 19.73 L 4.27 15.60 L 8.40 4.27 Z"
      }
    ]
  ]
};

export const TurbinoCompute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.73 8.40 L 15.60 19.73 L 4.27 15.60 L 8.40 4.27 Z" />
      {children}
    </svg>
  );
});

export default TurbinoCompute;
