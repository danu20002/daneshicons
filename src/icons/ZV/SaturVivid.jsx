import React from 'react';

export const iconData = {
  "id": "SaturVivid",
  "name": "SaturVivid",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 15.01 4.33 10.85 Q 7.47 10.05 10.61 9.25 Q 9.97 6.80 9.33 4.34 Q 11.54 7.49 13.75 10.64 Q 16.72 12.66 19.68 14.68 Q 18.34 14.22 17.00 13.75 Q 14.02 16.46 11.05 19.17 Z"
      }
    ]
  ]
};

export const SaturVivid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 15.01 4.33 10.85 Q 7.47 10.05 10.61 9.25 Q 9.97 6.80 9.33 4.34 Q 11.54 7.49 13.75 10.64 Q 16.72 12.66 19.68 14.68 Q 18.34 14.22 17.00 13.75 Q 14.02 16.46 11.05 19.17 Z" />
      {children}
    </svg>
  );
});

export default SaturVivid;
