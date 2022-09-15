export interface ResumeInfo {
  $schema: String
  basics: {
    name: String
    label: String
    image: String
    email: String
    phone: String
    url: String
    summary: String
    location: {
      address: String
      postalCode: String
      city: String
      region: String
    }
    profiles: {
      network: String
      username: String
      url: String
    }[]
  }
  work: {
    name: String
    position: String
    startDate: String
    endDate: String
    highlights: String[] | []
    summary?: String
    url?: String
    location: String
  }[]

  volunteer?: {
    organization: String
    position: String
    url: String
    startDate: String
    endDate: String
    summary: String
    highlights: String[]
  }[]

  education: {
    institution: String
    url?: String
    area: String
    studyType?: String
    startDate: String
    endDate: String
    score?: String
    courses?: String[]
  }[]

  awards?: {
    title: String
    date: String
    awarder: String
    summary: String
  }[]

  certificates?: {
    name: String
    date: String
    issuer: String
    url: String
  }[]

  publications?: {
    name: String
    publisher: String
    releaseDate: String
    url: String
    summary: String
  }[]

  skills: {
    name: String
    level: String
    keywords: String[]
  }[]

  languages?: {
    language: String
    fluency: String
  }[]

  interests?: {
    name: String
    keywords: String[]
  }[]

  references?: {
    name: String
    reference: String
  }[]

  projects: {
    name: String
    description?: String
    highlights?: String[]
    keywords?: String[]
    startDate: String
    endDate?: String
    url: String
    roles?: String[]
    entity?: String
    type?: String
  }[]
  meta: {
    version: String
    theme: String
  }
}
