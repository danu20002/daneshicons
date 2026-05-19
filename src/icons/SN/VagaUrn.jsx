import React from 'react';

export const iconData = {
  "id": "VagaUrn",
  "name": "VagaUrn",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.70 9.81 6.70 5.83 Q 9.75 5.25 12.80 4.68 Q 14.01 3.91 15.21 3.14 Q 15.22 6.96 15.23 10.79 Q 15.01 11.92 14.78 13.04 Q 15.03 13.55 15.27 14.07 Q 15.89 16.29 16.51 18.52 Q 13.60 16.16 10.69 13.79 Z"
      }
    ]
  ]
};

export const VagaUrn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.70 9.81 6.70 5.83 Q 9.75 5.25 12.80 4.68 Q 14.01 3.91 15.21 3.14 Q 15.22 6.96 15.23 10.79 Q 15.01 11.92 14.78 13.04 Q 15.03 13.55 15.27 14.07 Q 15.89 16.29 16.51 18.52 Q 13.60 16.16 10.69 13.79 Z" />
      {children}
    </svg>
  );
});

export default VagaUrn;
