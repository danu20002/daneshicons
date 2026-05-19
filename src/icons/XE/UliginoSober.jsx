import React from 'react';

export const iconData = {
  "id": "UliginoSober",
  "name": "UliginoSober",
  "category": "XE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.81 3.56 L 19.10 7.38 L 20.04 14.67 L 14.93 19.96 L 7.61 19.25 L 3.59 13.08 L 5.91 6.10 Z"
      }
    ]
  ]
};

export const UliginoSober = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.81 3.56 L 19.10 7.38 L 20.04 14.67 L 14.93 19.96 L 7.61 19.25 L 3.59 13.08 L 5.91 6.10 Z" />
      {children}
    </svg>
  );
});

export default UliginoSober;
