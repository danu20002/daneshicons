import React from 'react';

export const iconData = {
  "id": "TrajectoChrome",
  "name": "TrajectoChrome",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 12.00 L 19.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.67 L 12.00 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 2.17 12.00 a 9.83 9.83 0 1 0 19.66 0 a 9.83 9.83 0 1 0 -19.66 0"
      }
    ]
  ]
};

export const TrajectoChrome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 12.00 L 19.33 12.00" />
      <path d="M 12.00 4.67 L 12.00 19.33" />
      <path d="M 2.17 12.00 a 9.83 9.83 0 1 0 19.66 0 a 9.83 9.83 0 1 0 -19.66 0" />
      {children}
    </svg>
  );
});

export default TrajectoChrome;
