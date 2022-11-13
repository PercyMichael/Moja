import { HtmlProps } from "next/dist/shared/lib/html-context"
import React from "react"

interface Props
{
    title: string
}

const LeftBarRow = ({title }:Props) =>
{
    
  return (
      <div className="group space-x-2 items-center max-w-fit flex py-3 px-4 rounded-full hover:bg-slate-300 transition-all duration-200">
          <p></p><p className="text-base font-light lg:text-xl group-hover:text-red-600">{title}</p>
    </div>
  )
}

export default LeftBarRow