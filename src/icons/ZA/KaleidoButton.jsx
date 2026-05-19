import React from 'react';

export const iconData = {
  "id": "KaleidoButton",
  "name": "KaleidoButton",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.72 11.91 L 10.72 11.91"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 7.38 L 11.43 10.84"
      }
    ],
    [
      "path",
      {
        "d": "M 14.72 7.47 L 12.72 10.93"
      }
    ],
    [
      "path",
      {
        "d": "M 17.28 12.09 L 13.28 12.09"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 16.62 L 12.57 13.16"
      }
    ],
    [
      "path",
      {
        "d": "M 9.28 16.53 L 11.28 13.07"
      }
    ]
  ]
};

export const KaleidoButton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.72 11.91 L 10.72 11.91" />
      <path d="M 9.43 7.38 L 11.43 10.84" />
      <path d="M 14.72 7.47 L 12.72 10.93" />
      <path d="M 17.28 12.09 L 13.28 12.09" />
      <path d="M 14.57 16.62 L 12.57 13.16" />
      <path d="M 9.28 16.53 L 11.28 13.07" />
      {children}
    </svg>
  );
});

export default KaleidoButton;
