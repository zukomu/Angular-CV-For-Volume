import { IEducation } from "./Education"
import { IPastJob } from "./PastJob"

export interface ICV{
    name: string
    bio: string
    phone: string
    email: string
    location: string
    pronouns: string[]
    pastJobs: IPastJob[]
    education: IEducation[]
    skills: string[]
    personalAttributes: string[]
}