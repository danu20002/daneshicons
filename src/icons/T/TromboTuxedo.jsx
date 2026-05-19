import React from 'react';

export const iconData = {
  "id": "TromboTuxedo",
  "name": "TromboTuxedo",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.02 14.71 L 5.14 18.46 L 9.83 2.83 Z"
      }
    ]
  ]
};

export const TromboTuxedo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.02 14.71 L 5.14 18.46 L 9.83 2.83 Z" />
      {children}
    </svg>
  );
});

export default TromboTuxedo;
