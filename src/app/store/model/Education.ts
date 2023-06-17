export class Education{
    constructor(education: IEducation, index: number){
        this.institutionName = education.institutionName
        this.location = education.location
        this.degreeName = education.degreeName
        this.grade = education.grade
        this.startDateString = education.startDateString
        this.endDateString = education.endDateString
        this.description = education.description
        this.smallLogoURL = education.smallLogoURL
        this.bigLogoURL = education.bigLogoURL
        this.id = index
    }
    institutionName: string
    location: string
    degreeName: string
    grade: string
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
export interface IEducation{
    institutionName: string
    location: string
    degreeName: string
    grade: string
    startDateString: string
    endDateString: string
    description: string
    smallLogoURL: string
    bigLogoURL: string
}