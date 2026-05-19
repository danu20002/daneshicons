import React from 'react';

export const iconData = {
  "id": "VedovoHeir",
  "name": "VedovoHeir",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.80 10.92 L 17.83 19.95 L 8.03 21.03 L 2.20 13.08 L 6.17 4.05 L 15.97 2.97 Z"
      }
    ]
  ]
};

export const VedovoHeir = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.80 10.92 L 17.83 19.95 L 8.03 21.03 L 2.20 13.08 L 6.17 4.05 L 15.97 2.97 Z" />
      {children}
    </svg>
  );
});

export default VedovoHeir;
