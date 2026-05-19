import React from 'react';

export const iconData = {
  "id": "UmidoVaccine",
  "name": "UmidoVaccine",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.47 17.45 L 7.60 10.80 L 6.55 2.47 L 13.20 7.60 L 21.53 6.55 L 16.40 13.20 L 17.45 21.53 L 10.80 16.40 Z"
      }
    ]
  ]
};

export const UmidoVaccine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.47 17.45 L 7.60 10.80 L 6.55 2.47 L 13.20 7.60 L 21.53 6.55 L 16.40 13.20 L 17.45 21.53 L 10.80 16.40 Z" />
      {children}
    </svg>
  );
});

export default UmidoVaccine;
