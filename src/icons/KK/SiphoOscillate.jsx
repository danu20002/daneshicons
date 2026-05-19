import React from 'react';

export const iconData = {
  "id": "SiphoOscillate",
  "name": "SiphoOscillate",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.92 8.76 L 13.92 8.76"
      }
    ],
    [
      "path",
      {
        "d": "M 15.85 11.82 L 13.85 15.28"
      }
    ],
    [
      "path",
      {
        "d": "M 10.23 15.42 L 8.23 11.96"
      }
    ]
  ]
};

export const SiphoOscillate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.92 8.76 L 13.92 8.76" />
      <path d="M 15.85 11.82 L 13.85 15.28" />
      <path d="M 10.23 15.42 L 8.23 11.96" />
      {children}
    </svg>
  );
});

export default SiphoOscillate;
