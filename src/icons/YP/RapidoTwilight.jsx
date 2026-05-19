import React from 'react';

export const iconData = {
  "id": "RapidoTwilight",
  "name": "RapidoTwilight",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.95 3.29 L 19.07 17.18 L 3.98 15.53 Z"
      }
    ]
  ]
};

export const RapidoTwilight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.95 3.29 L 19.07 17.18 L 3.98 15.53 Z" />
      {children}
    </svg>
  );
});

export default RapidoTwilight;
