import React from 'react';

export const iconData = {
  "id": "SpinoMerge",
  "name": "SpinoMerge",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.43 8.12 Q 16.99 2.71 6.54 9.52"
      }
    ],
    [
      "path",
      {
        "d": "M 10.61 17.85 Q 11.86 17.55 9.84 16.43"
      }
    ]
  ]
};

export const SpinoMerge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.43 8.12 Q 16.99 2.71 6.54 9.52" />
      <path d="M 10.61 17.85 Q 11.86 17.55 9.84 16.43" />
      {children}
    </svg>
  );
});

export default SpinoMerge;
