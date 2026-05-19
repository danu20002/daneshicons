import React from 'react';

export const iconData = {
  "id": "ValicoSummer",
  "name": "ValicoSummer",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.86 7.72 5.30 3.09 Q 7.77 6.29 10.24 9.48 Q 13.09 7.89 15.93 6.30 Q 14.79 9.16 13.64 12.03 Q 13.60 13.69 13.56 15.35 Q 10.99 13.85 8.41 12.34 Z"
      }
    ]
  ]
};

export const ValicoSummer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.86 7.72 5.30 3.09 Q 7.77 6.29 10.24 9.48 Q 13.09 7.89 15.93 6.30 Q 14.79 9.16 13.64 12.03 Q 13.60 13.69 13.56 15.35 Q 10.99 13.85 8.41 12.34 Z" />
      {children}
    </svg>
  );
});

export default ValicoSummer;
