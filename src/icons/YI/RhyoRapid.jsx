import React from 'react';

export const iconData = {
  "id": "RhyoRapid",
  "name": "RhyoRapid",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.60 2.15 L 20.47 20.98 L 5.73 7.84 L 12.16 18.42 L 9.96 4.60 L 14.11 10.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.16 21.87 A 4.10 3.41 137 0 0 19.48 8.22"
      }
    ],
    [
      "path",
      {
        "d": "M 12.71 4.43 L 11.46 4.38"
      }
    ]
  ]
};

export const RhyoRapid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.60 2.15 L 20.47 20.98 L 5.73 7.84 L 12.16 18.42 L 9.96 4.60 L 14.11 10.13" />
      <path d="M 14.16 21.87 A 4.10 3.41 137 0 0 19.48 8.22" />
      <path d="M 12.71 4.43 L 11.46 4.38" />
      {children}
    </svg>
  );
});

export default RhyoRapid;
