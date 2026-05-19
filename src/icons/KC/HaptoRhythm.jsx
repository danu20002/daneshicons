import React from 'react';

export const iconData = {
  "id": "HaptoRhythm",
  "name": "HaptoRhythm",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.88 22.12 L 10.54 15.42 L 4.76 19.07 L 8.55 13.38 L 1.88 11.88 L 8.58 10.54 L 4.93 4.76 L 10.62 8.55 L 12.12 1.88 L 13.46 8.58 L 19.24 4.93 L 15.45 10.62 L 22.12 12.12 L 15.42 13.46 L 19.07 19.24 L 13.38 15.45 Z"
      }
    ]
  ]
};

export const HaptoRhythm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.88 22.12 L 10.54 15.42 L 4.76 19.07 L 8.55 13.38 L 1.88 11.88 L 8.58 10.54 L 4.93 4.76 L 10.62 8.55 L 12.12 1.88 L 13.46 8.58 L 19.24 4.93 L 15.45 10.62 L 22.12 12.12 L 15.42 13.46 L 19.07 19.24 L 13.38 15.45 Z" />
      {children}
    </svg>
  );
});

export default HaptoRhythm;
