import React from 'react';

export const iconData = {
  "id": "ZonaCurb",
  "name": "ZonaCurb",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.72 12.00 L 19.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.72 L 12.00 19.28"
      }
    ],
    [
      "path",
      {
        "d": "M 1.94 12.00 a 10.06 10.06 0 1 0 20.12 0 a 10.06 10.06 0 1 0 -20.12 0"
      }
    ]
  ]
};

export const ZonaCurb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.72 12.00 L 19.28 12.00" />
      <path d="M 12.00 4.72 L 12.00 19.28" />
      <path d="M 1.94 12.00 a 10.06 10.06 0 1 0 20.12 0 a 10.06 10.06 0 1 0 -20.12 0" />
      {children}
    </svg>
  );
});

export default ZonaCurb;
