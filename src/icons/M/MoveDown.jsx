import React from 'react';

export const iconData = {
  id: "MoveDown",
  name: "MoveDown",
  category: "M",
  nodes: [["path",{"d":"M8 18L12 22L16 18"}],["path",{"d":"M12 2V22"}]]
};

export const MoveDown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M8 18L12 22L16 18" />
      <path d="M12 2V22" />
      {children}
    </svg>
  );
});

export default MoveDown;
