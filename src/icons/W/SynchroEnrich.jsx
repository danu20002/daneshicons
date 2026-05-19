import React from 'react';

export const iconData = {
  "id": "SynchroEnrich",
  "name": "SynchroEnrich",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.57 13.84 L 14.25 14.32 L 13.51 22.62 L 10.49 14.85 L 2.37 16.72 L 8.82 11.45 L 4.54 4.30 L 11.55 8.81 L 17.02 2.52 L 14.90 10.58 Z"
      }
    ]
  ]
};

export const SynchroEnrich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.57 13.84 L 14.25 14.32 L 13.51 22.62 L 10.49 14.85 L 2.37 16.72 L 8.82 11.45 L 4.54 4.30 L 11.55 8.81 L 17.02 2.52 L 14.90 10.58 Z" />
      {children}
    </svg>
  );
});

export default SynchroEnrich;
