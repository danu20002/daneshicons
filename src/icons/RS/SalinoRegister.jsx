import React from 'react';

export const iconData = {
  "id": "SalinoRegister",
  "name": "SalinoRegister",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.47 12.00 Q 14.96 14.96 12.00 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.47 Q 9.04 14.96 2.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.53 12.00 Q 9.04 9.04 12.00 2.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.53 Q 14.96 9.04 21.47 12.00"
      }
    ]
  ]
};

export const SalinoRegister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.47 12.00 Q 14.96 14.96 12.00 21.47" />
      <path d="M 12.00 21.47 Q 9.04 14.96 2.53 12.00" />
      <path d="M 2.53 12.00 Q 9.04 9.04 12.00 2.53" />
      <path d="M 12.00 2.53 Q 14.96 9.04 21.47 12.00" />
      {children}
    </svg>
  );
});

export default SalinoRegister;
