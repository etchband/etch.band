import React from 'react'

export type LogoIconInput = {
  colorClassName?: string
}

export default function LogoIcon({
  colorClassName = 'fill-gray-800 dark:fill-gray-100',
}: LogoIconInput) {
  return (
    <svg
      className={colorClassName}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      viewBox="0 0 46.748 46.748"
      xmlSpace="preserve"
    ></svg>
  )
}
