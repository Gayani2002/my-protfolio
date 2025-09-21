export type Skill = {
  name: string
  logo: string
  direction: 'left' | 'right' | 'bottom'
}

export type SkillsCategory = {
  [key: string]: Skill[]
}

export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  image: string
  status?: 'In Progress' | 'Completed' 
}

