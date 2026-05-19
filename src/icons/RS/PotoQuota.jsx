import React from 'react';

export const iconData = {
  "id": "PotoQuota",
  "name": "PotoQuota",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.45 12.00 Q 15.03 15.03 12.00 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.45 Q 8.97 15.03 3.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 12.00 Q 8.97 8.97 12.00 3.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.55 Q 15.03 8.97 20.45 12.00"
      }
    ]
  ]
};

export const PotoQuota = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.45 12.00 Q 15.03 15.03 12.00 20.45" />
      <path d="M 12.00 20.45 Q 8.97 15.03 3.55 12.00" />
      <path d="M 3.55 12.00 Q 8.97 8.97 12.00 3.55" />
      <path d="M 12.00 3.55 Q 15.03 8.97 20.45 12.00" />
      {children}
    </svg>
  );
});

export default PotoQuota;
