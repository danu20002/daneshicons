import React from 'react';

export const iconData = {
  "id": "GlacioShip",
  "name": "GlacioShip",
  "category": "XT",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.06 12.00 a 9.94 9.94 0 1 0 19.89 0 a 9.94 9.94 0 1 0 -19.89 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.62 8.69 a 9.38 2.8126575544743453 0 1 0 18.75 0 a 9.38 2.8126575544743453 0 1 0 -18.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.62 15.31 a 9.38 2.8126575544743453 0 1 0 18.75 0 a 9.38 2.8126575544743453 0 1 0 -18.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.06 A 2 2 0 0 0 12.00 21.94"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.06 A 2 2 0 0 1 12.00 21.94"
      }
    ]
  ]
};

export const GlacioShip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.06 12.00 a 9.94 9.94 0 1 0 19.89 0 a 9.94 9.94 0 1 0 -19.89 0" />
      <path d="M 2.62 8.69 a 9.38 2.8126575544743453 0 1 0 18.75 0 a 9.38 2.8126575544743453 0 1 0 -18.75 0" />
      <path d="M 2.62 15.31 a 9.38 2.8126575544743453 0 1 0 18.75 0 a 9.38 2.8126575544743453 0 1 0 -18.75 0" />
      <path d="M 12.00 2.06 A 2 2 0 0 0 12.00 21.94" />
      <path d="M 12.00 2.06 A 2 2 0 0 1 12.00 21.94" />
      {children}
    </svg>
  );
});

export default GlacioShip;
