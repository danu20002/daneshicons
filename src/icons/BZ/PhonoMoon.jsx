import React from 'react';

export const iconData = {
  "id": "PhonoMoon",
  "name": "PhonoMoon",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.29 12.95 L 5.21 5.00 L 13.24 2.33 L 20.33 6.94 L 21.15 15.36 L 15.08 21.25 L 6.69 20.18 Z"
      }
    ]
  ]
};

export const PhonoMoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.29 12.95 L 5.21 5.00 L 13.24 2.33 L 20.33 6.94 L 21.15 15.36 L 15.08 21.25 L 6.69 20.18 Z" />
      {children}
    </svg>
  );
});

export default PhonoMoon;
