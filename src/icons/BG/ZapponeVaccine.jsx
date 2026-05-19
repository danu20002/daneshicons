import React from 'react';

export const iconData = {
  "id": "ZapponeVaccine",
  "name": "ZapponeVaccine",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.31 17.55 L 3.35 8.12 L 11.04 2.57 L 19.69 6.45 L 20.65 15.88 L 12.96 21.43 Z"
      }
    ]
  ]
};

export const ZapponeVaccine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.31 17.55 L 3.35 8.12 L 11.04 2.57 L 19.69 6.45 L 20.65 15.88 L 12.96 21.43 Z" />
      {children}
    </svg>
  );
});

export default ZapponeVaccine;
