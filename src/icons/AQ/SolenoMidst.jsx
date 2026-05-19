import React from 'react';

export const iconData = {
  "id": "SolenoMidst",
  "name": "SolenoMidst",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 6.54 L 11.20 7.29 L 17.46 4.30 L 16.71 11.20 L 19.70 17.46 L 12.80 16.71 L 6.54 19.70 L 7.29 12.80 Z"
      }
    ]
  ]
};

export const SolenoMidst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 6.54 L 11.20 7.29 L 17.46 4.30 L 16.71 11.20 L 19.70 17.46 L 12.80 16.71 L 6.54 19.70 L 7.29 12.80 Z" />
      {children}
    </svg>
  );
});

export default SolenoMidst;
