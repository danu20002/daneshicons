import React from 'react';

export const iconData = {
  "id": "TotemHover",
  "name": "TotemHover",
  "category": "XO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.53 12.00 Q 15.73 13.00 19.39 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 16.26 Q 14.73 14.73 16.26 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 19.39 Q 13.00 15.73 12.00 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.53 Q 11.00 15.73 7.74 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 19.39 Q 9.27 14.73 4.61 16.26"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 16.26 Q 8.27 13.00 3.47 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 12.00 Q 8.27 11.00 4.61 7.74"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 7.74 Q 9.27 9.27 7.74 4.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.74 4.61 Q 11.00 8.27 12.00 3.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.47 Q 13.00 8.27 16.26 4.61"
      }
    ],
    [
      "path",
      {
        "d": "M 16.26 4.61 Q 14.73 9.27 19.39 7.74"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 7.74 Q 15.73 11.00 20.53 12.00"
      }
    ]
  ]
};

export const TotemHover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.53 12.00 Q 15.73 13.00 19.39 16.26" />
      <path d="M 19.39 16.26 Q 14.73 14.73 16.26 19.39" />
      <path d="M 16.26 19.39 Q 13.00 15.73 12.00 20.53" />
      <path d="M 12.00 20.53 Q 11.00 15.73 7.74 19.39" />
      <path d="M 7.74 19.39 Q 9.27 14.73 4.61 16.26" />
      <path d="M 4.61 16.26 Q 8.27 13.00 3.47 12.00" />
      <path d="M 3.47 12.00 Q 8.27 11.00 4.61 7.74" />
      <path d="M 4.61 7.74 Q 9.27 9.27 7.74 4.61" />
      <path d="M 7.74 4.61 Q 11.00 8.27 12.00 3.47" />
      <path d="M 12.00 3.47 Q 13.00 8.27 16.26 4.61" />
      <path d="M 16.26 4.61 Q 14.73 9.27 19.39 7.74" />
      <path d="M 19.39 7.74 Q 15.73 11.00 20.53 12.00" />
      {children}
    </svg>
  );
});

export default TotemHover;
