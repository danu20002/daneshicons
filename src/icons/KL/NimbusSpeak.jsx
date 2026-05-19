import React from 'react';

export const iconData = {
  "id": "NimbusSpeak",
  "name": "NimbusSpeak",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.02 21.62 L 17.32 19.37"
      }
    ],
    [
      "path",
      {
        "d": "M 19.72 14.91 L 19.45 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 3.92 12.28 A 4.58 2.93 117 0 1 18.02 14.04"
      }
    ]
  ]
};

export const NimbusSpeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.02 21.62 L 17.32 19.37" />
      <path d="M 19.72 14.91 L 19.45 21.71" />
      <path d="M 3.92 12.28 A 4.58 2.93 117 0 1 18.02 14.04" />
      {children}
    </svg>
  );
});

export default NimbusSpeak;
