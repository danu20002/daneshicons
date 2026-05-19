import React from 'react';

export const iconData = {
  "id": "TeleoRiot",
  "name": "TeleoRiot",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.33 8.61 L 18.60 16.65 L 11.27 20.04 L 4.67 15.39 L 5.40 7.35 L 12.73 3.96 Z"
      }
    ]
  ]
};

export const TeleoRiot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.33 8.61 L 18.60 16.65 L 11.27 20.04 L 4.67 15.39 L 5.40 7.35 L 12.73 3.96 Z" />
      {children}
    </svg>
  );
});

export default TeleoRiot;
