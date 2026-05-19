import React from 'react';

export const iconData = {
  "id": "MonoEvent",
  "name": "MonoEvent",
  "category": "GD",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.47 8.19 L 13.86 11.92 L 16.38 4.73 L 21.69 7.90 L 19.14 11.56 L 7.91 11.09 L 12.26 7.36"
      }
    ],
    [
      "circle",
      {
        "cx": "6.47",
        "cy": "8.19",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "13.86",
        "cy": "11.92",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "16.38",
        "cy": "4.73",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "21.69",
        "cy": "7.90",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "19.14",
        "cy": "11.56",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "7.91",
        "cy": "11.09",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "12.26",
        "cy": "7.36",
        "r": "1.19"
      }
    ]
  ]
};

export const MonoEvent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.47 8.19 L 13.86 11.92 L 16.38 4.73 L 21.69 7.90 L 19.14 11.56 L 7.91 11.09 L 12.26 7.36" />
      <circle cx="6.47" cy="8.19" r="1.20" />
      <circle cx="13.86" cy="11.92" r="1.27" />
      <circle cx="16.38" cy="4.73" r="0.98" />
      <circle cx="21.69" cy="7.90" r="0.77" />
      <circle cx="19.14" cy="11.56" r="0.85" />
      <circle cx="7.91" cy="11.09" r="0.80" />
      <circle cx="12.26" cy="7.36" r="1.19" />
      {children}
    </svg>
  );
});

export default MonoEvent;
