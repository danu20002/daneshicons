import React from 'react';

export const iconData = {
  "id": "PaleoViolin",
  "name": "PaleoViolin",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.27 13.57 12.81 6.81 Q 14.29 8.49 15.76 10.17 Q 12.48 15.40 9.20 20.63 Q 8.47 20.48 7.73 20.32 Z"
      }
    ]
  ]
};

export const PaleoViolin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.27 13.57 12.81 6.81 Q 14.29 8.49 15.76 10.17 Q 12.48 15.40 9.20 20.63 Q 8.47 20.48 7.73 20.32 Z" />
      {children}
    </svg>
  );
});

export default PaleoViolin;
