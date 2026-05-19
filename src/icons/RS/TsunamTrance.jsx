import React from 'react';

export const iconData = {
  "id": "TsunamTrance",
  "name": "TsunamTrance",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.78 12.00 Q 15.56 14.06 16.89 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 16.89 20.47 Q 12.00 16.11 7.11 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 20.47 Q 8.44 14.06 2.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.22 12.00 Q 8.44 9.94 7.11 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.11 3.53 Q 12.00 7.89 16.89 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 16.89 3.53 Q 15.56 9.94 21.78 12.00"
      }
    ]
  ]
};

export const TsunamTrance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.78 12.00 Q 15.56 14.06 16.89 20.47" />
      <path d="M 16.89 20.47 Q 12.00 16.11 7.11 20.47" />
      <path d="M 7.11 20.47 Q 8.44 14.06 2.22 12.00" />
      <path d="M 2.22 12.00 Q 8.44 9.94 7.11 3.53" />
      <path d="M 7.11 3.53 Q 12.00 7.89 16.89 3.53" />
      <path d="M 16.89 3.53 Q 15.56 9.94 21.78 12.00" />
      {children}
    </svg>
  );
});

export default TsunamTrance;
