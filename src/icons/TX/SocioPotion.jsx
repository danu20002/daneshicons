import React from 'react';

export const iconData = {
  "id": "SocioPotion",
  "name": "SocioPotion",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.65 12.00 L 19.35 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.65 L 12.00 19.35"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 6.86 L 17.14 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 6.86 17.14 L 17.14 6.86"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 12.00 a 9.63 9.63 0 1 0 19.26 0 a 9.63 9.63 0 1 0 -19.26 0"
      }
    ]
  ]
};

export const SocioPotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.65 12.00 L 19.35 12.00" />
      <path d="M 12.00 4.65 L 12.00 19.35" />
      <path d="M 6.86 6.86 L 17.14 17.14" />
      <path d="M 6.86 17.14 L 17.14 6.86" />
      <path d="M 2.37 12.00 a 9.63 9.63 0 1 0 19.26 0 a 9.63 9.63 0 1 0 -19.26 0" />
      {children}
    </svg>
  );
});

export default SocioPotion;
