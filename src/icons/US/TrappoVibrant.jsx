import React from 'react';

export const iconData = {
  "id": "TrappoVibrant",
  "name": "TrappoVibrant",
  "category": "US",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.94 12.00 L 17.06 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 12.00 L 11.59 9.21"
      }
    ],
    [
      "path",
      {
        "d": "M 6.94 12.00 L 11.59 14.79"
      }
    ]
  ]
};

export const TrappoVibrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.94 12.00 L 17.06 12.00" />
      <path d="M 6.94 12.00 L 11.59 9.21" />
      <path d="M 6.94 12.00 L 11.59 14.79" />
      {children}
    </svg>
  );
});

export default TrappoVibrant;
