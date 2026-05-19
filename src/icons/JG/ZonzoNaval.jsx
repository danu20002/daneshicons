import React from 'react';

export const iconData = {
  "id": "ZonzoNaval",
  "name": "ZonzoNaval",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.16 4.90 L 17.57 6.15 L 19.28 15.49 L 10.93 20.00 L 4.06 13.46 Z"
      }
    ]
  ]
};

export const ZonzoNaval = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.16 4.90 L 17.57 6.15 L 19.28 15.49 L 10.93 20.00 L 4.06 13.46 Z" />
      {children}
    </svg>
  );
});

export default ZonzoNaval;
