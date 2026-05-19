import React from 'react';

export const iconData = {
  "id": "TerbioRubber",
  "name": "TerbioRubber",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.30 2.34 L 12.72 14.36 L 6.03 16.19 L 12.37 6.82 L 6.51 15.82 L 13.28 16.54"
      }
    ],
    [
      "circle",
      {
        "cx": "12.30",
        "cy": "2.34",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "12.72",
        "cy": "14.36",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "6.03",
        "cy": "16.19",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "12.37",
        "cy": "6.82",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "6.51",
        "cy": "15.82",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "13.28",
        "cy": "16.54",
        "r": "0.53"
      }
    ]
  ]
};

export const TerbioRubber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.30 2.34 L 12.72 14.36 L 6.03 16.19 L 12.37 6.82 L 6.51 15.82 L 13.28 16.54" />
      <circle cx="12.30" cy="2.34" r="1.05" />
      <circle cx="12.72" cy="14.36" r="1.32" />
      <circle cx="6.03" cy="16.19" r="1.44" />
      <circle cx="12.37" cy="6.82" r="0.75" />
      <circle cx="6.51" cy="15.82" r="1.49" />
      <circle cx="13.28" cy="16.54" r="0.53" />
      {children}
    </svg>
  );
});

export default TerbioRubber;
