import React from 'react';

export const iconData = {
  "id": "ToccoMemo",
  "name": "ToccoMemo",
  "category": "UA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.70 20.12 L 16.43 6.90 L 6.38 7.33 L 20.19 9.82 L 10.84 16.61 L 7.35 21.73 L 9.51 10.55 L 2.19 7.17"
      }
    ],
    [
      "circle",
      {
        "cx": "2.70",
        "cy": "20.12",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "16.43",
        "cy": "6.90",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "6.38",
        "cy": "7.33",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "20.19",
        "cy": "9.82",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "10.84",
        "cy": "16.61",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "7.35",
        "cy": "21.73",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "9.51",
        "cy": "10.55",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "2.19",
        "cy": "7.17",
        "r": "1.06"
      }
    ]
  ]
};

export const ToccoMemo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.70 20.12 L 16.43 6.90 L 6.38 7.33 L 20.19 9.82 L 10.84 16.61 L 7.35 21.73 L 9.51 10.55 L 2.19 7.17" />
      <circle cx="2.70" cy="20.12" r="0.66" />
      <circle cx="16.43" cy="6.90" r="1.48" />
      <circle cx="6.38" cy="7.33" r="1.49" />
      <circle cx="20.19" cy="9.82" r="0.66" />
      <circle cx="10.84" cy="16.61" r="1.36" />
      <circle cx="7.35" cy="21.73" r="0.82" />
      <circle cx="9.51" cy="10.55" r="0.81" />
      <circle cx="2.19" cy="7.17" r="1.06" />
      {children}
    </svg>
  );
});

export default ToccoMemo;
