import React from 'react';

export const iconData = {
  "id": "InkaPilot",
  "name": "InkaPilot",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.73 5.77 C 19.65 17.21, 10.38 13.74, 19.09 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 6.57 C 19.63 8.48, 11.63 18.03, 21.93 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 8.57 C 17.22 18.65, 9.88 14.18, 20.35 18.84"
      }
    ]
  ]
};

export const InkaPilot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.73 5.77 C 19.65 17.21, 10.38 13.74, 19.09 18.09" />
      <path d="M 6.16 6.57 C 19.63 8.48, 11.63 18.03, 21.93 16.45" />
      <path d="M 4.94 8.57 C 17.22 18.65, 9.88 14.18, 20.35 18.84" />
      {children}
    </svg>
  );
});

export default InkaPilot;
