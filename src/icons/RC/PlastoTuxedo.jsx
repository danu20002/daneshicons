import React from 'react';

export const iconData = {
  "id": "PlastoTuxedo",
  "name": "PlastoTuxedo",
  "category": "RC",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.92 17.67 L 6.72 12.36 L 16.90 11.03 L 8.77 5.03"
      }
    ],
    [
      "circle",
      {
        "cx": "12.92",
        "cy": "17.67",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "6.72",
        "cy": "12.36",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "16.90",
        "cy": "11.03",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "8.77",
        "cy": "5.03",
        "r": "1.03"
      }
    ]
  ]
};

export const PlastoTuxedo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.92 17.67 L 6.72 12.36 L 16.90 11.03 L 8.77 5.03" />
      <circle cx="12.92" cy="17.67" r="1.33" />
      <circle cx="6.72" cy="12.36" r="0.52" />
      <circle cx="16.90" cy="11.03" r="0.79" />
      <circle cx="8.77" cy="5.03" r="1.03" />
      {children}
    </svg>
  );
});

export default PlastoTuxedo;
