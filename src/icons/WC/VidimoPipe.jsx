import React from 'react';

export const iconData = {
  "id": "VidimoPipe",
  "name": "VidimoPipe",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.04 9.47 L 13.04 9.47"
      }
    ],
    [
      "path",
      {
        "d": "M 14.53 9.04 L 14.53 13.04"
      }
    ],
    [
      "path",
      {
        "d": "M 14.96 14.53 L 10.96 14.53"
      }
    ],
    [
      "path",
      {
        "d": "M 9.47 14.96 L 9.47 10.96"
      }
    ]
  ]
};

export const VidimoPipe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.04 9.47 L 13.04 9.47" />
      <path d="M 14.53 9.04 L 14.53 13.04" />
      <path d="M 14.96 14.53 L 10.96 14.53" />
      <path d="M 9.47 14.96 L 9.47 10.96" />
      {children}
    </svg>
  );
});

export default VidimoPipe;
