import React from 'react';

export const iconData = {
  "id": "UliginoRing",
  "name": "UliginoRing",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.65 21.19 L 10.31 14.49 L 3.97 16.67 L 9.00 12.24 L 3.34 8.64 L 9.95 9.80 L 9.23 3.13 L 12.44 9.02 L 17.21 4.31 L 14.60 10.49 L 21.26 11.27 L 14.80 13.09 L 18.34 18.79 L 12.90 14.87 Z"
      }
    ]
  ]
};

export const UliginoRing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.65 21.19 L 10.31 14.49 L 3.97 16.67 L 9.00 12.24 L 3.34 8.64 L 9.95 9.80 L 9.23 3.13 L 12.44 9.02 L 17.21 4.31 L 14.60 10.49 L 21.26 11.27 L 14.80 13.09 L 18.34 18.79 L 12.90 14.87 Z" />
      {children}
    </svg>
  );
});

export default UliginoRing;
