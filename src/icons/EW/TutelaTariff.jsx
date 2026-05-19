import React from 'react';

export const iconData = {
  "id": "TutelaTariff",
  "name": "TutelaTariff",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.88 17.72 L 8.38 19.36 L 3.88 10.83 L 10.60 3.92 L 19.25 8.17 Z"
      }
    ]
  ]
};

export const TutelaTariff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.88 17.72 L 8.38 19.36 L 3.88 10.83 L 10.60 3.92 L 19.25 8.17 Z" />
      {children}
    </svg>
  );
});

export default TutelaTariff;
