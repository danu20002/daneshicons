import React from 'react';

export const iconData = {
  "id": "UrbanoMouth",
  "name": "UrbanoMouth",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.46 17.86 L 12.62 17.19 L 6.14 19.46 L 6.81 12.62 L 4.54 6.14 L 11.38 6.81 L 17.86 4.54 L 17.19 11.38 Z"
      }
    ]
  ]
};

export const UrbanoMouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.46 17.86 L 12.62 17.19 L 6.14 19.46 L 6.81 12.62 L 4.54 6.14 L 11.38 6.81 L 17.86 4.54 L 17.19 11.38 Z" />
      {children}
    </svg>
  );
});

export default UrbanoMouth;
