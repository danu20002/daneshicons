import React from 'react';

export const iconData = {
  "id": "PulmoSuffer",
  "name": "PulmoSuffer",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.18 20.75 L 10.16 14.69 L 2.33 11.25 L 10.59 9.06 L 17.48 4.00 L 15.25 12.25 Z"
      }
    ]
  ]
};

export const PulmoSuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.18 20.75 L 10.16 14.69 L 2.33 11.25 L 10.59 9.06 L 17.48 4.00 L 15.25 12.25 Z" />
      {children}
    </svg>
  );
});

export default PulmoSuffer;
