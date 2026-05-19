import React from 'react';

export const iconData = {
  "id": "SinoOval",
  "name": "SinoOval",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.80 12.00 a 9.20 9.20 0 1 0 18.40 0 a 9.20 9.20 0 1 0 -18.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 8.93 a 8.67 2.6019108144573297 0 1 0 17.35 0 a 8.67 2.6019108144573297 0 1 0 -17.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 15.07 a 8.67 2.601910814457329 0 1 0 17.35 0 a 8.67 2.601910814457329 0 1 0 -17.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.80 A 2 2 0 0 0 12.00 21.20"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.80 A 2 2 0 0 1 12.00 21.20"
      }
    ]
  ]
};

export const SinoOval = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.80 12.00 a 9.20 9.20 0 1 0 18.40 0 a 9.20 9.20 0 1 0 -18.40 0" />
      <path d="M 3.33 8.93 a 8.67 2.6019108144573297 0 1 0 17.35 0 a 8.67 2.6019108144573297 0 1 0 -17.35 0" />
      <path d="M 3.33 15.07 a 8.67 2.601910814457329 0 1 0 17.35 0 a 8.67 2.601910814457329 0 1 0 -17.35 0" />
      <path d="M 12.00 2.80 A 2 2 0 0 0 12.00 21.20" />
      <path d="M 12.00 2.80 A 2 2 0 0 1 12.00 21.20" />
      {children}
    </svg>
  );
});

export default SinoOval;
