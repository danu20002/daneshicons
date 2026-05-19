import React from 'react';

export const iconData = {
  "id": "TattooWindow",
  "name": "TattooWindow",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 19.68 L 6.60 13.45 L 1.51 9.20 L 8.04 8.05 L 9.18 1.52 L 13.44 6.60 L 19.67 4.32 L 17.40 10.55 L 22.49 14.80 L 15.96 15.95 L 14.82 22.48 L 10.56 17.40 Z"
      }
    ]
  ]
};

export const TattooWindow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 19.68 L 6.60 13.45 L 1.51 9.20 L 8.04 8.05 L 9.18 1.52 L 13.44 6.60 L 19.67 4.32 L 17.40 10.55 L 22.49 14.80 L 15.96 15.95 L 14.82 22.48 L 10.56 17.40 Z" />
      {children}
    </svg>
  );
});

export default TattooWindow;
