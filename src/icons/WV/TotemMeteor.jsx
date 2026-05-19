import React from 'react';

export const iconData = {
  "id": "TotemMeteor",
  "name": "TotemMeteor",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 12.00 L 19.32 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.68 L 12.00 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 6.88 L 17.12 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 6.88 17.12 L 17.12 6.88"
      }
    ],
    [
      "path",
      {
        "d": "M 1.55 12.00 a 10.45 10.45 0 1 0 20.89 0 a 10.45 10.45 0 1 0 -20.89 0"
      }
    ]
  ]
};

export const TotemMeteor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 12.00 L 19.32 12.00" />
      <path d="M 12.00 4.68 L 12.00 19.32" />
      <path d="M 6.88 6.88 L 17.12 17.12" />
      <path d="M 6.88 17.12 L 17.12 6.88" />
      <path d="M 1.55 12.00 a 10.45 10.45 0 1 0 20.89 0 a 10.45 10.45 0 1 0 -20.89 0" />
      {children}
    </svg>
  );
});

export default TotemMeteor;
