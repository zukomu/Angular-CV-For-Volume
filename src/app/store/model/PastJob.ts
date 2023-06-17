export class PastJob{
    constructor(pastJob: IPastJob, index: number){
        this.companyName = pastJob.companyName
        this.location = pastJob.location
        this.title = pastJob.title
        this.startDateString = pastJob.startDateString
        this.endDateString = pastJob.endDateString
        this.description = pastJob.description
        this.smallLogoURL = pastJob.smallLogoURL
        this.bigLogoURL = pastJob.bigLogoURL
        this.id = index
    }
    companyName: string
    location: string
    title: string
    startDateString: string
    get startDate(): Date {
        if (this.startDateString) return new Date(this.startDateString)
        else return null;
    }
    endDateString: string
    get endDate(): Date {
        if (this.endDateString) return new Date(this.endDateString)
        else return null;
    }
    description: string
    smallLogoURL: string
    bigLogoURL: string
    id: number
}

export interface IPastJob{
    companyName: string
    location: string
    title: string
    startDateString: string
    endDateString: string
    description: string
    smallLogoURL: string
    bigLogoURL: string
}