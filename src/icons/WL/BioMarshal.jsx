import React from 'react';

export const iconData = {
  "id": "BioMarshal",
  "name": "BioMarshal",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.06 2.79 L 20.44 15.79 L 4.49 17.41 Z"
      }
    ]
  ]
};

export const BioMarshal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.06 2.79 L 20.44 15.79 L 4.49 17.41 Z" />
      {children}
    </svg>
  );
});

export default BioMarshal;
