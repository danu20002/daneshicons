import React from 'react';

export const iconData = {
  "id": "IndigoOmit",
  "name": "IndigoOmit",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.76 6.69 L 17.31 19.76 L 4.24 17.31 L 6.69 4.24 Z"
      }
    ]
  ]
};

export const IndigoOmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.76 6.69 L 17.31 19.76 L 4.24 17.31 L 6.69 4.24 Z" />
      {children}
    </svg>
  );
});

export default IndigoOmit;
