import React from 'react';

export const iconData = {
  "id": "VistosoFrigate",
  "name": "VistosoFrigate",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 18.30 L 10.30 2.35 L 21.21 15.35 Z"
      }
    ]
  ]
};

export const VistosoFrigate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 18.30 L 10.30 2.35 L 21.21 15.35 Z" />
      {children}
    </svg>
  );
});

export default VistosoFrigate;
