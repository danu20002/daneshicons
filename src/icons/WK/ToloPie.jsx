import React from 'react';

export const iconData = {
  "id": "ToloPie",
  "name": "ToloPie",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.10 20.00 L 2.57 8.86 L 12.07 2.06 L 21.47 9.00 L 17.78 20.08 Z"
      }
    ]
  ]
};

export const ToloPie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.10 20.00 L 2.57 8.86 L 12.07 2.06 L 21.47 9.00 L 17.78 20.08 Z" />
      {children}
    </svg>
  );
});

export default ToloPie;
