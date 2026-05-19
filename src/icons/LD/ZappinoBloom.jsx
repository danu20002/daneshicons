import React from 'react';

export const iconData = {
  "id": "ZappinoBloom",
  "name": "ZappinoBloom",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.89 6.13 L 11.89 6.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.14 11.38 L 17.14 14.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.97 18.49 L 6.97 15.03"
      }
    ]
  ]
};

export const ZappinoBloom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.89 6.13 L 11.89 6.13" />
      <path d="M 19.14 11.38 L 17.14 14.84" />
      <path d="M 8.97 18.49 L 6.97 15.03" />
      {children}
    </svg>
  );
});

export default ZappinoBloom;
