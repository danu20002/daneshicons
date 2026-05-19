import React from 'react';

export const iconData = {
  "id": "TruncoEra",
  "name": "TruncoEra",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.80 12.17 L 16.04 14.41 L 17.26 21.44 L 11.93 16.70 L 6.45 21.27 L 7.89 14.29 L 1.20 11.83 L 7.96 9.59 L 6.74 2.56 L 12.07 7.30 L 17.55 2.73 L 16.11 9.71 Z"
      }
    ]
  ]
};

export const TruncoEra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.80 12.17 L 16.04 14.41 L 17.26 21.44 L 11.93 16.70 L 6.45 21.27 L 7.89 14.29 L 1.20 11.83 L 7.96 9.59 L 6.74 2.56 L 12.07 7.30 L 17.55 2.73 L 16.11 9.71 Z" />
      {children}
    </svg>
  );
});

export default TruncoEra;
