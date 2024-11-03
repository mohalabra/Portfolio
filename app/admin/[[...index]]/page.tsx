"use client"

import { NextStudio } from 'next-sanity/studio'
import React from 'react'
import config from '@/sanity.config'

const Admin = () => {
  return (
    <NextStudio config={config} />
  )
}

export default Admin