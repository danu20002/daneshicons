import React from 'react';

export const iconData = {
  "id": "SalinoMoth",
  "name": "SalinoMoth",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.08 11.89 L 12.11 20.08 L 3.92 12.11 L 11.89 3.92 Z"
      }
    ]
  ]
};

export const SalinoMoth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.08 11.89 L 12.11 20.08 L 3.92 12.11 L 11.89 3.92 Z" />
      {children}
    </svg>
  );
});

export default SalinoMoth;
