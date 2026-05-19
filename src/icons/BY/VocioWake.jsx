import React from 'react';

export const iconData = {
  "id": "VocioWake",
  "name": "VocioWake",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 10.05 L 17.90 5.68 L 14.53 20.27 Z"
      }
    ]
  ]
};

export const VocioWake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 10.05 L 17.90 5.68 L 14.53 20.27 Z" />
      {children}
    </svg>
  );
});

export default VocioWake;
