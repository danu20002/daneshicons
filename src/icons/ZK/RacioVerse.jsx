import React from 'react';

export const iconData = {
  "id": "RacioVerse",
  "name": "RacioVerse",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.92 12.65 L 18.55 19.47 L 11.35 21.92 L 4.53 18.55 L 2.08 11.35 L 5.45 4.53 L 12.65 2.08 L 19.47 5.45 Z"
      }
    ]
  ]
};

export const RacioVerse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.92 12.65 L 18.55 19.47 L 11.35 21.92 L 4.53 18.55 L 2.08 11.35 L 5.45 4.53 L 12.65 2.08 L 19.47 5.45 Z" />
      {children}
    </svg>
  );
});

export default RacioVerse;
