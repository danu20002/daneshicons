import React from 'react';

export const iconData = {
  "id": "SpanoDie",
  "name": "SpanoDie",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.14 3.34 L 7.97 5.74 L 9.08 12.89 L 17.17 18.50 L 21.60 20.07 L 18.78 3.91 L 9.40 18.84"
      }
    ],
    [
      "circle",
      {
        "cx": "2.14",
        "cy": "3.34",
        "r": "1.18"
      }
    ],
    [
      "circle",
      {
        "cx": "7.97",
        "cy": "5.74",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "9.08",
        "cy": "12.89",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "17.17",
        "cy": "18.50",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "21.60",
        "cy": "20.07",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "18.78",
        "cy": "3.91",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "9.40",
        "cy": "18.84",
        "r": "0.51"
      }
    ]
  ]
};

export const SpanoDie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.14 3.34 L 7.97 5.74 L 9.08 12.89 L 17.17 18.50 L 21.60 20.07 L 18.78 3.91 L 9.40 18.84" />
      <circle cx="2.14" cy="3.34" r="1.18" />
      <circle cx="7.97" cy="5.74" r="0.84" />
      <circle cx="9.08" cy="12.89" r="1.20" />
      <circle cx="17.17" cy="18.50" r="0.99" />
      <circle cx="21.60" cy="20.07" r="1.41" />
      <circle cx="18.78" cy="3.91" r="1.49" />
      <circle cx="9.40" cy="18.84" r="0.51" />
      {children}
    </svg>
  );
});

export default SpanoDie;
