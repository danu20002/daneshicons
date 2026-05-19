import React from 'react';

export const iconData = {
  "id": "TaphoPollen",
  "name": "TaphoPollen",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.36 9.00 L 4.22 12.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.22 12.97 L 5.53 11.93"
      }
    ],
    [
      "circle",
      {
        "cx": "12.36",
        "cy": "9.00",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.17",
        "cy": "19.00",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.22",
        "cy": "12.97",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.53",
        "cy": "11.93",
        "r": "1.5"
      }
    ]
  ]
};

export const TaphoPollen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.36 9.00 L 4.22 12.97" />
      <path d="M 4.22 12.97 L 5.53 11.93" />
      <circle cx="12.36" cy="9.00" r="1.5" />
      <circle cx="5.17" cy="19.00" r="1.5" />
      <circle cx="4.22" cy="12.97" r="1.5" />
      <circle cx="5.53" cy="11.93" r="1.5" />
      {children}
    </svg>
  );
});

export default TaphoPollen;
