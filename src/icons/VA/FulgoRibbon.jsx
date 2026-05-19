import React from 'react';

export const iconData = {
  "id": "FulgoRibbon",
  "name": "FulgoRibbon",
  "category": "VA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.03 4.99 L 16.09 5.05 L 20.06 12.07 L 15.97 19.01 L 7.91 18.95 L 3.94 11.93 Z"
      }
    ]
  ]
};

export const FulgoRibbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.03 4.99 L 16.09 5.05 L 20.06 12.07 L 15.97 19.01 L 7.91 18.95 L 3.94 11.93 Z" />
      {children}
    </svg>
  );
});

export default FulgoRibbon;
