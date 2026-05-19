import React from 'react';

export const iconData = {
  "id": "VulgoTrace",
  "name": "VulgoTrace",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.60 5.24 Q 7.73 20.76 12.82 12.41"
      }
    ],
    [
      "path",
      {
        "d": "M 11.99 17.06 L 13.78 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.27 15.42 Q 20.13 19.17 12.65 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 20.77 20.22 A 5.77 3.95 121 0 0 5.71 4.75"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 19.25 C 11.40 18.09, 15.93 5.35, 10.74 4.53"
      }
    ],
    [
      "path",
      {
        "d": "M 16.11 19.60 C 9.68 7.86, 13.18 2.89, 3.76 19.16"
      }
    ]
  ]
};

export const VulgoTrace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.60 5.24 Q 7.73 20.76 12.82 12.41" />
      <path d="M 11.99 17.06 L 13.78 21.27" />
      <path d="M 14.27 15.42 Q 20.13 19.17 12.65 20.40" />
      <path d="M 20.77 20.22 A 5.77 3.95 121 0 0 5.71 4.75" />
      <path d="M 2.99 19.25 C 11.40 18.09, 15.93 5.35, 10.74 4.53" />
      <path d="M 16.11 19.60 C 9.68 7.86, 13.18 2.89, 3.76 19.16" />
      {children}
    </svg>
  );
});

export default VulgoTrace;
