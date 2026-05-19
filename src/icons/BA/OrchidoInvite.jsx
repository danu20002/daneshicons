import React from 'react';

export const iconData = {
  "id": "OrchidoInvite",
  "name": "OrchidoInvite",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 4.54 L 6.32 4.58 L 10.59 12.26 L 13.65 11.99 L 11.87 6.94 L 6.65 6.39"
      }
    ],
    [
      "circle",
      {
        "cx": "3.62",
        "cy": "4.54",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "6.32",
        "cy": "4.58",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "10.59",
        "cy": "12.26",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "13.65",
        "cy": "11.99",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "11.87",
        "cy": "6.94",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.65",
        "cy": "6.39",
        "r": "1.00"
      }
    ]
  ]
};

export const OrchidoInvite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 4.54 L 6.32 4.58 L 10.59 12.26 L 13.65 11.99 L 11.87 6.94 L 6.65 6.39" />
      <circle cx="3.62" cy="4.54" r="1.31" />
      <circle cx="6.32" cy="4.58" r="0.78" />
      <circle cx="10.59" cy="12.26" r="1.47" />
      <circle cx="13.65" cy="11.99" r="1.34" />
      <circle cx="11.87" cy="6.94" r="0.63" />
      <circle cx="6.65" cy="6.39" r="1.00" />
      {children}
    </svg>
  );
});

export default OrchidoInvite;
