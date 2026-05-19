import React from 'react';

export const iconData = {
  "id": "UmbraGirl",
  "name": "UmbraGirl",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.85 12.00 Q 14.53 13.05 18.96 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 18.96 Q 13.05 14.53 12.00 21.85"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.85 Q 10.95 14.53 5.04 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 18.96 Q 9.47 13.05 2.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.15 12.00 Q 9.47 10.95 5.04 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 5.04 5.04 Q 10.95 9.47 12.00 2.15"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.15 Q 13.05 9.47 18.96 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 18.96 5.04 Q 14.53 10.95 21.85 12.00"
      }
    ]
  ]
};

export const UmbraGirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.85 12.00 Q 14.53 13.05 18.96 18.96" />
      <path d="M 18.96 18.96 Q 13.05 14.53 12.00 21.85" />
      <path d="M 12.00 21.85 Q 10.95 14.53 5.04 18.96" />
      <path d="M 5.04 18.96 Q 9.47 13.05 2.15 12.00" />
      <path d="M 2.15 12.00 Q 9.47 10.95 5.04 5.04" />
      <path d="M 5.04 5.04 Q 10.95 9.47 12.00 2.15" />
      <path d="M 12.00 2.15 Q 13.05 9.47 18.96 5.04" />
      <path d="M 18.96 5.04 Q 14.53 10.95 21.85 12.00" />
      {children}
    </svg>
  );
});

export default UmbraGirl;
