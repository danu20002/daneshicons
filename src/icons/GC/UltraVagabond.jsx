import React from 'react';

export const iconData = {
  "id": "UltraVagabond",
  "name": "UltraVagabond",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.82 8.33 L 16.69 20.47"
      }
    ],
    [
      "path",
      {
        "d": "M 20.82 8.33 L 18.11 19.66"
      }
    ],
    [
      "circle",
      {
        "cx": "20.82",
        "cy": "8.33",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.69",
        "cy": "20.47",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.11",
        "cy": "19.66",
        "r": "1.5"
      }
    ]
  ]
};

export const UltraVagabond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.82 8.33 L 16.69 20.47" />
      <path d="M 20.82 8.33 L 18.11 19.66" />
      <circle cx="20.82" cy="8.33" r="1.5" />
      <circle cx="16.69" cy="20.47" r="1.5" />
      <circle cx="18.11" cy="19.66" r="1.5" />
      {children}
    </svg>
  );
});

export default UltraVagabond;
