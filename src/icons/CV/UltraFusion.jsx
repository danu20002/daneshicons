import React from 'react';

export const iconData = {
  "id": "UltraFusion",
  "name": "UltraFusion",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 10.53 L 10.04 6.88 L 17.89 4.74 L 17.42 12.86 L 15.34 20.73 L 8.54 16.26 Z"
      }
    ]
  ]
};

export const UltraFusion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 10.53 L 10.04 6.88 L 17.89 4.74 L 17.42 12.86 L 15.34 20.73 L 8.54 16.26 Z" />
      {children}
    </svg>
  );
});

export default UltraFusion;
