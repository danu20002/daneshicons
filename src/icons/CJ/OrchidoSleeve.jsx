import React from 'react';

export const iconData = {
  "id": "OrchidoSleeve",
  "name": "OrchidoSleeve",
  "category": "CJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.57 6.93 L 11.57 6.93"
      }
    ],
    [
      "path",
      {
        "d": "M 17.07 7.57 L 17.07 11.57"
      }
    ],
    [
      "path",
      {
        "d": "M 16.43 17.07 L 12.43 17.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 16.43 L 6.93 12.43"
      }
    ]
  ]
};

export const OrchidoSleeve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.57 6.93 L 11.57 6.93" />
      <path d="M 17.07 7.57 L 17.07 11.57" />
      <path d="M 16.43 17.07 L 12.43 17.07" />
      <path d="M 6.93 16.43 L 6.93 12.43" />
      {children}
    </svg>
  );
});

export default OrchidoSleeve;
