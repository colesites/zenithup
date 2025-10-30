import React from 'react'

export default function MarketplaceProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.id}</p>
    </div>
  )
}
