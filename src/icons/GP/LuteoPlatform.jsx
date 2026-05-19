import React from 'react';

export const iconData = {
  "id": "LuteoPlatform",
  "name": "LuteoPlatform",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.16 7.82 C 13.50 5.59, 5.77 4.57, 20.24 14.59"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 3.42 C 11.68 6.64, 12.83 13.46, 21.05 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 2.05 7.77 C 12.30 16.15, 19.58 7.72, 14.92 14.57"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 5.50 C 10.40 13.47, 14.36 6.43, 19.09 18.77"
      }
    ]
  ]
};

export const LuteoPlatform = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.16 7.82 C 13.50 5.59, 5.77 4.57, 20.24 14.59" />
      <path d="M 3.22 3.42 C 11.68 6.64, 12.83 13.46, 21.05 19.51" />
      <path d="M 2.05 7.77 C 12.30 16.15, 19.58 7.72, 14.92 14.57" />
      <path d="M 4.02 5.50 C 10.40 13.47, 14.36 6.43, 19.09 18.77" />
      {children}
    </svg>
  );
});

export default LuteoPlatform;
