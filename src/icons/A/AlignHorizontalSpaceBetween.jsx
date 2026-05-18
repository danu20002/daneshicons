import React from 'react';

export const iconData = {
  id: "AlignHorizontalSpaceBetween",
  name: "AlignHorizontalSpaceBetween",
  category: "A",
  nodes: [["rect",{"width":"6","height":"14","x":"3","y":"5","rx":"2"}],["rect",{"width":"6","height":"10","x":"15","y":"7","rx":"2"}],["path",{"d":"M3 2v20"}],["path",{"d":"M21 2v20"}]]
};

export const AlignHorizontalSpaceBetween = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect width="6" height="14" x="3" y="5" rx="2" />
      <rect width="6" height="10" x="15" y="7" rx="2" />
      <path d="M3 2v20" />
      <path d="M21 2v20" />
      {children}
    </svg>
  );
});

export default AlignHorizontalSpaceBetween;
