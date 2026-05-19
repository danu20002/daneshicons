import React from 'react';

export const iconData = {
  "id": "NulliRust",
  "name": "NulliRust",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.36 10.27 L 15.44 12.80 L 20.55 18.10 L 13.87 15.00 L 13.73 22.36 L 11.20 15.44 L 5.90 20.55 L 9.00 13.87 L 1.64 13.73 L 8.56 11.20 L 3.45 5.90 L 10.13 9.00 L 10.27 1.64 L 12.80 8.56 L 18.10 3.45 L 15.00 10.13 Z"
      }
    ]
  ]
};

export const NulliRust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.36 10.27 L 15.44 12.80 L 20.55 18.10 L 13.87 15.00 L 13.73 22.36 L 11.20 15.44 L 5.90 20.55 L 9.00 13.87 L 1.64 13.73 L 8.56 11.20 L 3.45 5.90 L 10.13 9.00 L 10.27 1.64 L 12.80 8.56 L 18.10 3.45 L 15.00 10.13 Z" />
      {children}
    </svg>
  );
});

export default NulliRust;
