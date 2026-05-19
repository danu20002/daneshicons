import React from 'react';

export const iconData = {
  "id": "TardigradoShake",
  "name": "TardigradoShake",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.67 12.00 Q 13.60 13.60 12.00 20.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.67 Q 10.40 13.60 3.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 Q 10.40 10.40 12.00 3.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.33 Q 13.60 10.40 20.67 12.00"
      }
    ]
  ]
};

export const TardigradoShake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.67 12.00 Q 13.60 13.60 12.00 20.67" />
      <path d="M 12.00 20.67 Q 10.40 13.60 3.33 12.00" />
      <path d="M 3.33 12.00 Q 10.40 10.40 12.00 3.33" />
      <path d="M 12.00 3.33 Q 13.60 10.40 20.67 12.00" />
      {children}
    </svg>
  );
});

export default TardigradoShake;
