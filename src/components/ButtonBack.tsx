'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function ButtonBack() {

    const router = useRouter()
  return (
    <button className="text-white text-md" onClick={() => router.back()}>
    Back
  </button>
  )
}
