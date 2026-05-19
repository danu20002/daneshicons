import React from 'react';

export const iconData = {
  "id": "EunoOccupy",
  "name": "EunoOccupy",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 17.20 L 7.53 9.82 L 11.36 2.72 L 16.12 9.22 L 20.36 16.08 L 12.34 16.96 Z"
      }
    ]
  ]
};

export const EunoOccupy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 17.20 L 7.53 9.82 L 11.36 2.72 L 16.12 9.22 L 20.36 16.08 L 12.34 16.96 Z" />
      {children}
    </svg>
  );
});

export default EunoOccupy;
