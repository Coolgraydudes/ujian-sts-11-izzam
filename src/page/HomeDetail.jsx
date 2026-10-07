import React from 'react'
import { Link, useParams } from 'react-router'
import { Button } from '@/components/ui/button'
import { homeData } from './Home'

export default function HomeDetail() {
  const { id } = useParams()
  const homeItem = homeData.find((item) => item.id === Number(id))


  return (
    <section className="p-4 m-28">
      <h1 className="text-2xl font-bold mb-4">{homeItem.data}</h1>
      <p className="mb-6">{homeItem.answer}</p>
      <Button asChild variant="outline">
        <Link to="/">Kembali</Link>
      </Button>
    </section>
  )
}