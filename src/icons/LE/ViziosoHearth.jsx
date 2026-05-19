import React from 'react';

export const iconData = {
  "id": "ViziosoHearth",
  "name": "ViziosoHearth",
  "category": "LE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.12 4.37 C 4.58 21.26, 5.32 13.02, 13.13 21.24"
      }
    ],
    [
      "path",
      {
        "d": "M 9.36 11.57 L 20.26 6.93 L 13.52 4.84 L 11.01 3.84 L 4.56 13.74 L 10.53 6.58"
      }
    ]
  ]
};

export const ViziosoHearth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.12 4.37 C 4.58 21.26, 5.32 13.02, 13.13 21.24" />
      <path d="M 9.36 11.57 L 20.26 6.93 L 13.52 4.84 L 11.01 3.84 L 4.56 13.74 L 10.53 6.58" />
      {children}
    </svg>
  );
});

export default ViziosoHearth;
