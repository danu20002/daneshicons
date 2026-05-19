import React from 'react';

export const iconData = {
  "id": "PlenoMister",
  "name": "PlenoMister",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.74 21.67 L 9.02 13.48 L 2.33 8.74 L 10.52 9.02 L 15.26 2.33 L 14.98 10.52 L 21.67 15.26 L 13.48 14.98 Z"
      }
    ]
  ]
};

export const PlenoMister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.74 21.67 L 9.02 13.48 L 2.33 8.74 L 10.52 9.02 L 15.26 2.33 L 14.98 10.52 L 21.67 15.26 L 13.48 14.98 Z" />
      {children}
    </svg>
  );
});

export default PlenoMister;
