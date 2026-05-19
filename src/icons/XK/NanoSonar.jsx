import React from 'react';

export const iconData = {
  "id": "NanoSonar",
  "name": "NanoSonar",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.34 4.88 C 8.42 13.94, 12.01 4.82, 21.33 16.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.22 5.84 C 8.63 17.46, 19.16 11.44, 16.52 16.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 7.18 C 7.18 10.43, 17.68 15.72, 20.45 14.07"
      }
    ],
    [
      "path",
      {
        "d": "M 9.44 5.83 C 10.85 11.79, 5.69 6.55, 18.73 14.82"
      }
    ],
    [
      "path",
      {
        "d": "M 2.83 3.41 C 7.23 19.39, 13.73 5.42, 16.17 18.58"
      }
    ]
  ]
};

export const NanoSonar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.34 4.88 C 8.42 13.94, 12.01 4.82, 21.33 16.08" />
      <path d="M 8.22 5.84 C 8.63 17.46, 19.16 11.44, 16.52 16.19" />
      <path d="M 7.92 7.18 C 7.18 10.43, 17.68 15.72, 20.45 14.07" />
      <path d="M 9.44 5.83 C 10.85 11.79, 5.69 6.55, 18.73 14.82" />
      <path d="M 2.83 3.41 C 7.23 19.39, 13.73 5.42, 16.17 18.58" />
      {children}
    </svg>
  );
});

export default NanoSonar;
