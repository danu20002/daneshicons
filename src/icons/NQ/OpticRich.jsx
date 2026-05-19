import React from 'react';

export const iconData = {
  "id": "OpticRich",
  "name": "OpticRich",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.64 4.04 L 20.69 13.00 L 13.74 20.58 L 4.38 16.30 L 5.55 6.08 Z"
      }
    ]
  ]
};

export const OpticRich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.64 4.04 L 20.69 13.00 L 13.74 20.58 L 4.38 16.30 L 5.55 6.08 Z" />
      {children}
    </svg>
  );
});

export default OpticRich;
