import React from 'react';

export const iconData = {
  "id": "FluxoTrust",
  "name": "FluxoTrust",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.54 2.96 L 18.16 5.22 L 21.14 12.59 L 17.24 19.51 L 9.40 20.78 L 3.51 15.44 L 4.02 7.51 Z"
      }
    ]
  ]
};

export const FluxoTrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.54 2.96 L 18.16 5.22 L 21.14 12.59 L 17.24 19.51 L 9.40 20.78 L 3.51 15.44 L 4.02 7.51 Z" />
      {children}
    </svg>
  );
});

export default FluxoTrust;
