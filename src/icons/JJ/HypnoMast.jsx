import React from 'react';

export const iconData = {
  "id": "HypnoMast",
  "name": "HypnoMast",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.34 19.12 L 13.00 14.86 L 11.45 21.52 L 10.68 14.73 L 4.88 18.34 L 9.14 13.00 L 2.48 11.45 L 9.27 10.68 L 5.66 4.88 L 11.00 9.14 L 12.55 2.48 L 13.32 9.27 L 19.12 5.66 L 14.86 11.00 L 21.52 12.55 L 14.73 13.32 Z"
      }
    ]
  ]
};

export const HypnoMast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.34 19.12 L 13.00 14.86 L 11.45 21.52 L 10.68 14.73 L 4.88 18.34 L 9.14 13.00 L 2.48 11.45 L 9.27 10.68 L 5.66 4.88 L 11.00 9.14 L 12.55 2.48 L 13.32 9.27 L 19.12 5.66 L 14.86 11.00 L 21.52 12.55 L 14.73 13.32 Z" />
      {children}
    </svg>
  );
});

export default HypnoMast;
