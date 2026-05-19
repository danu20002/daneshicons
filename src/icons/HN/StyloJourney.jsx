import React from 'react';

export const iconData = {
  "id": "StyloJourney",
  "name": "StyloJourney",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 15.95 A 6.84 5.93 103 0 1 4.98 10.02"
      }
    ],
    [
      "path",
      {
        "d": "M 15.32 13.16 A 4.17 4.36 153 0 1 2.98 16.58"
      }
    ]
  ]
};

export const StyloJourney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 15.95 A 6.84 5.93 103 0 1 4.98 10.02" />
      <path d="M 15.32 13.16 A 4.17 4.36 153 0 1 2.98 16.58" />
      {children}
    </svg>
  );
});

export default StyloJourney;
