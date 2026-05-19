import React from 'react';

export const iconData = {
  "id": "ViscidoGovern",
  "name": "ViscidoGovern",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.96 6.65 L 17.45 13.37 L 17.35 20.96 L 10.63 17.45 L 3.04 17.35 L 6.55 10.63 L 6.65 3.04 L 13.37 6.55 Z"
      }
    ]
  ]
};

export const ViscidoGovern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.96 6.65 L 17.45 13.37 L 17.35 20.96 L 10.63 17.45 L 3.04 17.35 L 6.55 10.63 L 6.65 3.04 L 13.37 6.55 Z" />
      {children}
    </svg>
  );
});

export default ViscidoGovern;
