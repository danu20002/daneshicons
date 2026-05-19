import React from 'react';

export const iconData = {
  "id": "LumenTulip",
  "name": "LumenTulip",
  "category": "KK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.47 12.00 Q 13.56 13.56 12.00 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.47 Q 10.44 13.56 3.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 Q 10.44 10.44 12.00 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.53 Q 13.56 10.44 20.47 12.00"
      }
    ]
  ]
};

export const LumenTulip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.47 12.00 Q 13.56 13.56 12.00 20.47" />
      <path d="M 12.00 20.47 Q 10.44 13.56 3.53 12.00" />
      <path d="M 3.53 12.00 Q 10.44 10.44 12.00 3.53" />
      <path d="M 12.00 3.53 Q 13.56 10.44 20.47 12.00" />
      {children}
    </svg>
  );
});

export default LumenTulip;
