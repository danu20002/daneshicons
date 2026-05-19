import React from 'react';

export const iconData = {
  "id": "NymphaMaine",
  "name": "NymphaMaine",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.30 6.46 L 13.30 6.46"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 9.30 L 17.54 13.30"
      }
    ],
    [
      "path",
      {
        "d": "M 14.70 17.54 L 10.70 17.54"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 14.70 L 6.46 10.70"
      }
    ]
  ]
};

export const NymphaMaine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.30 6.46 L 13.30 6.46" />
      <path d="M 17.54 9.30 L 17.54 13.30" />
      <path d="M 14.70 17.54 L 10.70 17.54" />
      <path d="M 6.46 14.70 L 6.46 10.70" />
      {children}
    </svg>
  );
});

export default NymphaMaine;
