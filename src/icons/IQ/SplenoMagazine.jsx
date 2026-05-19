import React from 'react';

export const iconData = {
  "id": "SplenoMagazine",
  "name": "SplenoMagazine",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.95 21.52 L 10.57 16.74 L 5.94 19.40 L 7.63 14.34 L 2.48 12.95 L 7.26 10.57 L 4.60 5.94 L 9.66 7.63 L 11.05 2.48 L 13.43 7.26 L 18.06 4.60 L 16.37 9.66 L 21.52 11.05 L 16.74 13.43 L 19.40 18.06 L 14.34 16.37 Z"
      }
    ]
  ]
};

export const SplenoMagazine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.95 21.52 L 10.57 16.74 L 5.94 19.40 L 7.63 14.34 L 2.48 12.95 L 7.26 10.57 L 4.60 5.94 L 9.66 7.63 L 11.05 2.48 L 13.43 7.26 L 18.06 4.60 L 16.37 9.66 L 21.52 11.05 L 16.74 13.43 L 19.40 18.06 L 14.34 16.37 Z" />
      {children}
    </svg>
  );
});

export default SplenoMagazine;
