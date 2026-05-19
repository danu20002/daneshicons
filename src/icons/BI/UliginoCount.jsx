import React from 'react';

export const iconData = {
  "id": "UliginoCount",
  "name": "UliginoCount",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.94 16.07 L 14.02 14.43 L 14.39 21.53 L 11.36 15.10 L 6.04 19.81 L 9.18 13.43 L 2.18 12.21 L 9.12 10.69 L 5.71 4.45 L 11.23 8.93 L 13.98 2.38 L 13.92 9.49 L 20.76 7.55 L 15.16 11.93 Z"
      }
    ]
  ]
};

export const UliginoCount = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.94 16.07 L 14.02 14.43 L 14.39 21.53 L 11.36 15.10 L 6.04 19.81 L 9.18 13.43 L 2.18 12.21 L 9.12 10.69 L 5.71 4.45 L 11.23 8.93 L 13.98 2.38 L 13.92 9.49 L 20.76 7.55 L 15.16 11.93 Z" />
      {children}
    </svg>
  );
});

export default UliginoCount;
