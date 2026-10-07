import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router'

export const homeData = [
    {id: 1, data: 'Cara mendaftar akun', answer: 'Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail (Dummy).' },
    {id: 2, data: 'Metode pemabayaran', answer: 'Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail (Dummy).' },
    {id: 3, data: 'Pengembalian dana', answer: 'Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail (Dummy).' },
]

export default function Home() {
  return (
    <section className="p-4 m-28">
        <div className="mb-6" >
            <p className="text-sm">pusat bantuan</p>
            <h1 className="text-4xl font-bold my-2">Pertanyaan Umum</h1>
            <p className="text-muted-foreground">
                Temukan jawaban dari pertanyaan yang sering ditanyakan.
            </p>
        </div>

      <div className="flex flex-row gap-4">
        {homeData.map(({ id, data, answer }) => (
        <Link key={id} to={`/home/${id}`}>
            <Card className="hover:bg-muted transition-colors">
                <CardHeader>
                <CardTitle>{data}</CardTitle>
                </CardHeader>
                <CardContent>
                <p>{answer}</p>
                </CardContent>
            </Card>
        </Link>

        ))}
      </div>
    </section>
  )
}