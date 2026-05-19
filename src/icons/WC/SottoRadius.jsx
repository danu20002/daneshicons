import React from 'react';

export const iconData = {
  "id": "SottoRadius",
  "name": "SottoRadius",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.72 11.10 L 15.72 11.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.77 11.45 L 14.01 15.26"
      }
    ],
    [
      "path",
      {
        "d": "M 12.76 12.56 L 9.52 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 11.70 12.89 L 8.46 10.54"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 11.99 L 12.29 8.18"
      }
    ]
  ]
};

export const SottoRadius = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.72 11.10 L 15.72 11.10" />
      <path d="M 12.77 11.45 L 14.01 15.26" />
      <path d="M 12.76 12.56 L 9.52 14.91" />
      <path d="M 11.70 12.89 L 8.46 10.54" />
      <path d="M 11.06 11.99 L 12.29 8.18" />
      {children}
    </svg>
  );
});

export default SottoRadius;
