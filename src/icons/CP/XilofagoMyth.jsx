import React from 'react';

export const iconData = {
  "id": "XilofagoMyth",
  "name": "XilofagoMyth",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 6.53 L 19.70 6.53 L 19.70 17.47 L 4.30 17.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 6.53 L 8.79 2.04 L 24.18 2.04 L 19.70 6.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 6.53 L 24.18 2.04 L 24.18 12.98 L 19.70 17.47"
      }
    ]
  ]
};

export const XilofagoMyth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 6.53 L 19.70 6.53 L 19.70 17.47 L 4.30 17.47 Z" />
      <path d="M 4.30 6.53 L 8.79 2.04 L 24.18 2.04 L 19.70 6.53" />
      <path d="M 19.70 6.53 L 24.18 2.04 L 24.18 12.98 L 19.70 17.47" />
      {children}
    </svg>
  );
});

export default XilofagoMyth;
