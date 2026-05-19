import React from 'react';

export const iconData = {
  "id": "VescicaLegend",
  "name": "VescicaLegend",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.73 12.00 L 17.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 12.00 L 12.43 9.09"
      }
    ],
    [
      "path",
      {
        "d": "M 17.27 12.00 L 12.43 14.91"
      }
    ]
  ]
};

export const VescicaLegend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.73 12.00 L 17.27 12.00" />
      <path d="M 17.27 12.00 L 12.43 9.09" />
      <path d="M 17.27 12.00 L 12.43 14.91" />
      {children}
    </svg>
  );
});

export default VescicaLegend;
