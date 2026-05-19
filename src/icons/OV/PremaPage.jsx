import React from 'react';

export const iconData = {
  "id": "PremaPage",
  "name": "PremaPage",
  "category": "OV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.63 17.80 C 11.70 15.87, 3.59 8.44, 7.01 20.92"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 11.46 L 13.84 2.07 L 6.06 4.57 L 19.52 6.71 L 12.93 11.19"
      }
    ],
    [
      "path",
      {
        "d": "M 15.53 3.21 C 14.73 11.65, 9.57 12.13, 19.06 9.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.66 12.77 C 16.42 6.10, 19.43 3.66, 9.99 21.69"
      }
    ],
    [
      "path",
      {
        "d": "M 12.55 12.52 L 8.94 21.94"
      }
    ],
    [
      "path",
      {
        "d": "M 6.28 21.24 Q 9.25 7.64 17.56 19.36"
      }
    ]
  ]
};

export const PremaPage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.63 17.80 C 11.70 15.87, 3.59 8.44, 7.01 20.92" />
      <path d="M 6.33 11.46 L 13.84 2.07 L 6.06 4.57 L 19.52 6.71 L 12.93 11.19" />
      <path d="M 15.53 3.21 C 14.73 11.65, 9.57 12.13, 19.06 9.61" />
      <path d="M 8.66 12.77 C 16.42 6.10, 19.43 3.66, 9.99 21.69" />
      <path d="M 12.55 12.52 L 8.94 21.94" />
      <path d="M 6.28 21.24 Q 9.25 7.64 17.56 19.36" />
      {children}
    </svg>
  );
});

export default PremaPage;
