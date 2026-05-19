import React from 'react';

export const iconData = {
  "id": "OsmoCamp",
  "name": "OsmoCamp",
  "category": "JA",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.56",
        "cy": "9.17",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.62",
        "cy": "12.84",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.09",
        "cy": "5.55",
        "r": "1.5"
      }
    ]
  ]
};

export const OsmoCamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.56" cy="9.17" r="1.5" />
      <circle cx="9.62" cy="12.84" r="1.5" />
      <circle cx="16.09" cy="5.55" r="1.5" />
      {children}
    </svg>
  );
});

export default OsmoCamp;
