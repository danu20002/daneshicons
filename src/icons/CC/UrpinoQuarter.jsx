import React from 'react';

export const iconData = {
  "id": "UrpinoQuarter",
  "name": "UrpinoQuarter",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.46 20.48 L 10.55 15.45 L 3.52 15.46 L 8.55 10.55 L 8.54 3.52 L 13.45 8.55 L 20.48 8.54 L 15.45 13.45 Z"
      }
    ]
  ]
};

export const UrpinoQuarter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.46 20.48 L 10.55 15.45 L 3.52 15.46 L 8.55 10.55 L 8.54 3.52 L 13.45 8.55 L 20.48 8.54 L 15.45 13.45 Z" />
      {children}
    </svg>
  );
});

export default UrpinoQuarter;
