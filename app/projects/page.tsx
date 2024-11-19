import { ProjectsCards } from '@/src/components'
import { projects } from '@/src/utils/Constants'
import { Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Container maxWidth="xl"><ProjectsCards projects={projects} /></Container>
  )
}

export default page