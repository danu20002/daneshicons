import React from 'react';

export const iconData = {
  "id": "PlanoTandem",
  "name": "PlanoTandem",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.70 10.13 L 17.18 13.79 L 18.47 19.47 L 13.04 17.38 L 8.77 21.34 L 7.86 15.59 L 2.30 13.87 L 6.82 10.21 L 5.53 4.53 L 10.96 6.62 L 15.23 2.66 L 16.14 8.41 Z"
      }
    ]
  ]
};

export const PlanoTandem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.70 10.13 L 17.18 13.79 L 18.47 19.47 L 13.04 17.38 L 8.77 21.34 L 7.86 15.59 L 2.30 13.87 L 6.82 10.21 L 5.53 4.53 L 10.96 6.62 L 15.23 2.66 L 16.14 8.41 Z" />
      {children}
    </svg>
  );
});

export default PlanoTandem;
