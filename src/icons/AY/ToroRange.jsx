import React from 'react';

export const iconData = {
  "id": "ToroRange",
  "name": "ToroRange",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.71 6.06 A 4.53 2.68 43 0 0 12.21 21.29"
      }
    ],
    [
      "path",
      {
        "d": "M 20.41 12.26 C 19.47 10.38, 16.95 16.87, 7.73 12.78"
      }
    ]
  ]
};

export const ToroRange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.71 6.06 A 4.53 2.68 43 0 0 12.21 21.29" />
      <path d="M 20.41 12.26 C 19.47 10.38, 16.95 16.87, 7.73 12.78" />
      {children}
    </svg>
  );
});

export default ToroRange;
