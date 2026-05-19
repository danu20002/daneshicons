import React from 'react';

export const iconData = {
  "id": "DorsoLull",
  "name": "DorsoLull",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.65 6.10 L 20.29 9.45 L 10.06 20.45 Z"
      }
    ]
  ]
};

export const DorsoLull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.65 6.10 L 20.29 9.45 L 10.06 20.45 Z" />
      {children}
    </svg>
  );
});

export default DorsoLull;
