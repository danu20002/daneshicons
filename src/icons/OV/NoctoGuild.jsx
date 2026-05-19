import React from 'react';

export const iconData = {
  "id": "NoctoGuild",
  "name": "NoctoGuild",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.45 18.24 A 2.94 4.44 34 0 0 12.74 14.36"
      }
    ],
    [
      "path",
      {
        "d": "M 14.84 12.55 L 11.44 11.71"
      }
    ],
    [
      "path",
      {
        "d": "M 12.34 18.86 L 13.90 17.90"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 5.44 Q 2.55 4.08 20.79 7.99"
      }
    ]
  ]
};

export const NoctoGuild = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.45 18.24 A 2.94 4.44 34 0 0 12.74 14.36" />
      <path d="M 14.84 12.55 L 11.44 11.71" />
      <path d="M 12.34 18.86 L 13.90 17.90" />
      <path d="M 20.51 5.44 Q 2.55 4.08 20.79 7.99" />
      {children}
    </svg>
  );
});

export default NoctoGuild;
