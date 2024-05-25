import React from 'react'

// Définir une interface pour les props
interface HeaderItemsProps {
  name: string;
  Icon: React.ElementType;
}

export const HeaderItems: React.FC<HeaderItemsProps> = ({ name, Icon }) => {
  return (
    <button className="flex items-center gap-2 text-white hover:underline underline-offset-8">
        <Icon />
        <p>{name}</p>
    </button>
  )
}