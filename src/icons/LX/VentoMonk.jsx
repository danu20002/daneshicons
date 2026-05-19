import React from 'react';

export const iconData = {
  "id": "VentoMonk",
  "name": "VentoMonk",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.86 17.97 L 12.21 18.53"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 8.88 C 9.96 2.33, 2.67 3.94, 3.42 18.55"
      }
    ]
  ]
};

export const VentoMonk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.86 17.97 L 12.21 18.53" />
      <path d="M 5.73 8.88 C 9.96 2.33, 2.67 3.94, 3.42 18.55" />
      {children}
    </svg>
  );
});

export default VentoMonk;
