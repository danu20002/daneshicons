import React from 'react';

export const iconData = {
  "id": "VictoGuard",
  "name": "VictoGuard",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 5.07 L 21.00 5.07 L 21.00 18.93 L 3.00 18.93 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 5.07 L 7.46 0.62 L 25.45 0.62 L 21.00 5.07"
      }
    ],
    [
      "path",
      {
        "d": "M 21.00 5.07 L 25.45 0.62 L 25.45 14.48 L 21.00 18.93"
      }
    ]
  ]
};

export const VictoGuard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 5.07 L 21.00 5.07 L 21.00 18.93 L 3.00 18.93 Z" />
      <path d="M 3.00 5.07 L 7.46 0.62 L 25.45 0.62 L 21.00 5.07" />
      <path d="M 21.00 5.07 L 25.45 0.62 L 25.45 14.48 L 21.00 18.93" />
      {children}
    </svg>
  );
});

export default VictoGuard;
