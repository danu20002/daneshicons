import React from 'react';

export const iconData = {
  "id": "ScenarioCrop",
  "name": "ScenarioCrop",
  "category": "BA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.54 3.56 L 15.38 18.38 L 20.14 12.78 L 11.62 14.95"
      }
    ],
    [
      "circle",
      {
        "cx": "21.54",
        "cy": "3.56",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "15.38",
        "cy": "18.38",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "20.14",
        "cy": "12.78",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "11.62",
        "cy": "14.95",
        "r": "0.92"
      }
    ]
  ]
};

export const ScenarioCrop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.54 3.56 L 15.38 18.38 L 20.14 12.78 L 11.62 14.95" />
      <circle cx="21.54" cy="3.56" r="1.15" />
      <circle cx="15.38" cy="18.38" r="1.09" />
      <circle cx="20.14" cy="12.78" r="1.48" />
      <circle cx="11.62" cy="14.95" r="0.92" />
      {children}
    </svg>
  );
});

export default ScenarioCrop;
