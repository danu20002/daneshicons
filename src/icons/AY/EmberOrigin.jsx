import React from 'react';

export const iconData = {
  "id": "EmberOrigin",
  "name": "EmberOrigin",
  "category": "AY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.17 13.14 A 2.28 6.07 99 0 1 11.90 14.78"
      }
    ],
    [
      "path",
      {
        "d": "M 7.16 18.05 C 15.66 21.21, 14.42 11.73, 17.66 17.31"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 7.55 L 15.44 20.88"
      }
    ]
  ]
};

export const EmberOrigin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.17 13.14 A 2.28 6.07 99 0 1 11.90 14.78" />
      <path d="M 7.16 18.05 C 15.66 21.21, 14.42 11.73, 17.66 17.31" />
      <path d="M 17.46 7.55 L 15.44 20.88" />
      {children}
    </svg>
  );
});

export default EmberOrigin;
