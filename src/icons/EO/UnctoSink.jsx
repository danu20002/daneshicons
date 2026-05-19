import React from 'react';

export const iconData = {
  "id": "UnctoSink",
  "name": "UnctoSink",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 12.00 L 19.82 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.18 L 12.00 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 6.53 L 17.47 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 6.53 17.47 L 17.47 6.53"
      }
    ],
    [
      "path",
      {
        "d": "M 1.97 12.00 a 10.03 10.03 0 1 0 20.06 0 a 10.03 10.03 0 1 0 -20.06 0"
      }
    ]
  ]
};

export const UnctoSink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 12.00 L 19.82 12.00" />
      <path d="M 12.00 4.18 L 12.00 19.82" />
      <path d="M 6.53 6.53 L 17.47 17.47" />
      <path d="M 6.53 17.47 L 17.47 6.53" />
      <path d="M 1.97 12.00 a 10.03 10.03 0 1 0 20.06 0 a 10.03 10.03 0 1 0 -20.06 0" />
      {children}
    </svg>
  );
});

export default UnctoSink;
