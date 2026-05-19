import React from 'react';

export const iconData = {
  "id": "GenoTornado",
  "name": "GenoTornado",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.73 17.61 L 11.18 19.98 L 5.25 16.34 L 4.40 9.43 L 9.27 4.46 L 16.20 5.17 L 19.96 11.02 Z"
      }
    ]
  ]
};

export const GenoTornado = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.73 17.61 L 11.18 19.98 L 5.25 16.34 L 4.40 9.43 L 9.27 4.46 L 16.20 5.17 L 19.96 11.02 Z" />
      {children}
    </svg>
  );
});

export default GenoTornado;
