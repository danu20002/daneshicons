import React from 'react';

export const iconData = {
  "id": "ProtoLizard",
  "name": "ProtoLizard",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.57 19.76 L 8.16 19.63 L 3.64 13.76 L 5.42 6.56 L 12.15 3.46 L 18.77 6.79 L 20.29 14.04 Z"
      }
    ]
  ]
};

export const ProtoLizard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.57 19.76 L 8.16 19.63 L 3.64 13.76 L 5.42 6.56 L 12.15 3.46 L 18.77 6.79 L 20.29 14.04 Z" />
      {children}
    </svg>
  );
});

export default ProtoLizard;
