export class Bicycle {
    constructor (
        public title: string = "",
        public description: string = "",
        public price: number = 0,
        public location: string = "",
        public image: { data: Buffer, contentType: String } = {data : null, contentType: "image/png"},
        public _creator: string = ""
    ) {}
}
