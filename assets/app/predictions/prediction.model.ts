export class Prediction {
    constructor(public solNum: string,
                public title: string,
                public url: string,
                public predictions: {},
                public agency: string,
                public office: string,
                public contact: string,
                public position: string,
                public reviewStatus?: boolean,
                public reviewRec?: string,
                public isReadable?: boolean,
                public eitLikelihood?: boolean,

              ) {}
}
