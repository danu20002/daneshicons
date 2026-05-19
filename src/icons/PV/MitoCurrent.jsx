import React from 'react';

export const iconData = {
  "id": "MitoCurrent",
  "name": "MitoCurrent",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.33 9.14 L 9.81 21.51 L 4.86 5.35 Z"
      }
    ]
  ]
};

export const MitoCurrent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.33 9.14 L 9.81 21.51 L 4.86 5.35 Z" />
      {children}
    </svg>
  );
});

export default MitoCurrent;
