import React from 'react';

export const iconData = {
  "id": "TutelaHidden",
  "name": "TutelaHidden",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.97 6.32 L 12.97 6.32"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 12.21 L 16.43 15.68"
      }
    ],
    [
      "path",
      {
        "d": "M 8.60 17.47 L 6.60 14.00"
      }
    ]
  ]
};

export const TutelaHidden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.97 6.32 L 12.97 6.32" />
      <path d="M 18.43 12.21 L 16.43 15.68" />
      <path d="M 8.60 17.47 L 6.60 14.00" />
      {children}
    </svg>
  );
});

export default TutelaHidden;
