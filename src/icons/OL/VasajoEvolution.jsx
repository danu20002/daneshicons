import React from 'react';

export const iconData = {
  "id": "VasajoEvolution",
  "name": "VasajoEvolution",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.77 19.15 L 11.83 21.18 L 5.96 18.92 L 2.93 13.42 L 4.14 7.26 L 9.02 3.31 L 15.30 3.43 L 20.04 7.56 L 21.01 13.77 Z"
      }
    ]
  ]
};

export const VasajoEvolution = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.77 19.15 L 11.83 21.18 L 5.96 18.92 L 2.93 13.42 L 4.14 7.26 L 9.02 3.31 L 15.30 3.43 L 20.04 7.56 L 21.01 13.77 Z" />
      {children}
    </svg>
  );
});

export default VasajoEvolution;
