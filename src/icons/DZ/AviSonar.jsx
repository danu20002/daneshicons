import React from 'react';

export const iconData = {
  "id": "AviSonar",
  "name": "AviSonar",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.73 4.01 L 12.47 4.73 L 15.37 6.07 L 14.88 3.19 L 15.93 5.43 L 16.67 6.59 L 17.25 7.39 L 16.62 6.58 L 18.52 6.56 L 19.14 8.08 L 16.75 7.57 L 17.46 8.41 L 20.32 9.84 L 17.51 10.12 L 14.67 12.48 L 17.25 12.85 L 20.08 15.10"
      }
    ]
  ]
};

export const AviSonar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.73 4.01 L 12.47 4.73 L 15.37 6.07 L 14.88 3.19 L 15.93 5.43 L 16.67 6.59 L 17.25 7.39 L 16.62 6.58 L 18.52 6.56 L 19.14 8.08 L 16.75 7.57 L 17.46 8.41 L 20.32 9.84 L 17.51 10.12 L 14.67 12.48 L 17.25 12.85 L 20.08 15.10" />
      {children}
    </svg>
  );
});

export default AviSonar;
