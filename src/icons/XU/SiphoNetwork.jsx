import React from 'react';

export const iconData = {
  "id": "SiphoNetwork",
  "name": "SiphoNetwork",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 5.58 L 19.70 5.58 L 19.70 18.42 L 4.30 18.42 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 5.58 L 7.93 1.96 L 23.33 1.96 L 19.70 5.58"
      }
    ],
    [
      "path",
      {
        "d": "M 19.70 5.58 L 23.33 1.96 L 23.33 14.79 L 19.70 18.42"
      }
    ]
  ]
};

export const SiphoNetwork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 5.58 L 19.70 5.58 L 19.70 18.42 L 4.30 18.42 Z" />
      <path d="M 4.30 5.58 L 7.93 1.96 L 23.33 1.96 L 19.70 5.58" />
      <path d="M 19.70 5.58 L 23.33 1.96 L 23.33 14.79 L 19.70 18.42" />
      {children}
    </svg>
  );
});

export default SiphoNetwork;
