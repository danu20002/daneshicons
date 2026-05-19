import React from 'react';

export const iconData = {
  "id": "UroRip",
  "name": "UroRip",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.56 11.88 L 15.56 11.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.33 11.68 L 10.33 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.11 12.45 L 10.11 8.98"
      }
    ]
  ]
};

export const UroRip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.56 11.88 L 15.56 11.88" />
      <path d="M 12.33 11.68 L 10.33 15.14" />
      <path d="M 12.11 12.45 L 10.11 8.98" />
      {children}
    </svg>
  );
});

export default UroRip;
