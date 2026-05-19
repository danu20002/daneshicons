import React from 'react';

export const iconData = {
  "id": "PiloSevere",
  "name": "PiloSevere",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.94 13.60 L 10.40 19.94 L 4.06 10.40 L 13.60 4.06 Z"
      }
    ]
  ]
};

export const PiloSevere = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.94 13.60 L 10.40 19.94 L 4.06 10.40 L 13.60 4.06 Z" />
      {children}
    </svg>
  );
});

export default PiloSevere;
