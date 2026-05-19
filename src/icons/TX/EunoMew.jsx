import React from 'react';

export const iconData = {
  "id": "EunoMew",
  "name": "EunoMew",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.47 12.00 Q 16.03 13.67 17.99 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.99 17.99 Q 13.67 16.03 12.00 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.47 Q 10.33 16.03 6.01 17.99"
      }
    ],
    [
      "path",
      {
        "d": "M 6.01 17.99 Q 7.97 13.67 3.53 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 12.00 Q 7.97 10.33 6.01 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 6.01 6.01 Q 10.33 7.97 12.00 3.53"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.53 Q 13.67 7.97 17.99 6.01"
      }
    ],
    [
      "path",
      {
        "d": "M 17.99 6.01 Q 16.03 10.33 20.47 12.00"
      }
    ]
  ]
};

export const EunoMew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.47 12.00 Q 16.03 13.67 17.99 17.99" />
      <path d="M 17.99 17.99 Q 13.67 16.03 12.00 20.47" />
      <path d="M 12.00 20.47 Q 10.33 16.03 6.01 17.99" />
      <path d="M 6.01 17.99 Q 7.97 13.67 3.53 12.00" />
      <path d="M 3.53 12.00 Q 7.97 10.33 6.01 6.01" />
      <path d="M 6.01 6.01 Q 10.33 7.97 12.00 3.53" />
      <path d="M 12.00 3.53 Q 13.67 7.97 17.99 6.01" />
      <path d="M 17.99 6.01 Q 16.03 10.33 20.47 12.00" />
      {children}
    </svg>
  );
});

export default EunoMew;
