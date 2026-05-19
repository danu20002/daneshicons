import React from 'react';

export const iconData = {
  "id": "UrsinoMenu",
  "name": "UrsinoMenu",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.07 19.22 A 2.35 4.01 106 0 0 5.78 10.60"
      }
    ],
    [
      "path",
      {
        "d": "M 10.42 18.60 C 21.96 12.94, 10.33 8.50, 14.23 17.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.61 17.36 C 12.36 11.94, 18.52 4.03, 4.76 5.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.64 4.16 L 2.44 7.85 L 18.96 6.50"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 9.97 L 16.90 6.45 L 11.64 21.14 L 15.55 16.34 L 18.04 15.47"
      }
    ]
  ]
};

export const UrsinoMenu = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.07 19.22 A 2.35 4.01 106 0 0 5.78 10.60" />
      <path d="M 10.42 18.60 C 21.96 12.94, 10.33 8.50, 14.23 17.75" />
      <path d="M 9.61 17.36 C 12.36 11.94, 18.52 4.03, 4.76 5.84" />
      <path d="M 9.64 4.16 L 2.44 7.85 L 18.96 6.50" />
      <path d="M 20.38 9.97 L 16.90 6.45 L 11.64 21.14 L 15.55 16.34 L 18.04 15.47" />
      {children}
    </svg>
  );
});

export default UrsinoMenu;
