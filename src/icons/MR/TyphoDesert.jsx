import React from 'react';

export const iconData = {
  "id": "TyphoDesert",
  "name": "TyphoDesert",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.16 13.54 6.48 6.09 Q 11.67 7.86 16.87 9.63 Q 18.77 12.37 20.67 15.12 Q 19.26 18.05 17.84 20.98 Z"
      }
    ]
  ]
};

export const TyphoDesert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.16 13.54 6.48 6.09 Q 11.67 7.86 16.87 9.63 Q 18.77 12.37 20.67 15.12 Q 19.26 18.05 17.84 20.98 Z" />
      {children}
    </svg>
  );
});

export default TyphoDesert;
