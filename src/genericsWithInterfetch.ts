interface Developer<T> {
    name: string;
    salary: number;
    device: {
        brand: string
        model: string;
        relesedYear: string
    };
    smartWatch: T
}

interface BrandCharaWatch {
    hertRate: string;
    stopWatch: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch> = {
    name: 'Mr. poor',
    salary: 20,
    device: {
        brand: 'Lenovo',
        model: "A21",
        relesedYear: '2010'
    },
    smartWatch: {
        hertRate: '200',
        stopWatch: true
    }

}

interface AppleWatch {
    hertRate: string;
    callSupport: boolean;
    calculator: boolean;
    AiFeature: boolean;
}

const richDeveloper: Developer<AppleWatch> = {
    name: 'Mr. Rich',
    salary: 100,
    device: {
        brand: 'hp',
        model: "x34",
        relesedYear: '2050'
    },
    smartWatch: {
        hertRate: '200',
        callSupport: true,
        calculator: true,
        AiFeature: true
    }

}