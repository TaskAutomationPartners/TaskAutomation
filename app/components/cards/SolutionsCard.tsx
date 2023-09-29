import React from 'react'

type Props = {
    title: string;
    description: string;
}

export default function SolutionsCard({title, description}: Props) {
  return (
    <div className="card min-h-60 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}



