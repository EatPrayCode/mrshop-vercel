import { appSettingsState, categoriesNavItems } from "./app.models";

export const categoriesNavItemsConst: categoriesNavItems[] = [
    {
        displayName: 'Housekeeping',
        route: 'housekeeping',
        children: [
            {
                displayName: 'Groceries',
                packsList: [{
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name1',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }
                    ,
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                },
                {
                    name: 'Name3',
                    price: '30'
                },
                {
                    name: 'Name4',
                    price: '60'
                }]
            },
            {
                displayName: 'Cutlery',
                packsList: [{
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }
                    ,
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                },
                {
                    name: 'Name5',
                    price: '30'
                },
                {
                    name: 'Name6',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }
                    ,
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                },
                {
                    name: 'Name7',
                    price: '30'
                },
                {
                    name: 'Name8',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Mens',
        iconName: 'videocam',
        route: 'mens',
        children: [
            {
                displayName: 'Grooming',
                packsList: [{
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }
                    ,
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                },
                {
                    name: 'Name9',
                    price: '30'
                },
                {
                    name: 'Name10',
                    price: '60'
                }]
            },
            {
                displayName: 'Hair/Makeup',
                packsList: [{
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }
                    ,
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                },
                {
                    name: 'Name11',
                    price: '30'
                },
                {
                    name: 'Name12',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }
                    ,
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                },
                {
                    name: 'Name13',
                    price: '30'
                },
                {
                    name: 'Name14',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Womens',
        route: 'womens',
        children: [
            {
                displayName: 'Beauty/Makeup',
                packsList: [{
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }
                    ,
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                },
                {
                    name: 'Name14',
                    price: '30'
                },
                {
                    name: 'Name15',
                    price: '60'
                }]
            },
            {
                displayName: 'Fashion',
                packsList: [{
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }
                    ,
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                },
                {
                    name: 'Name16',
                    price: '30'
                },
                {
                    name: 'Name17',
                    price: '60'
                }]
            },
            {
                displayName: 'Essentials',
                packsList: [{
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }
                    ,
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                },
                {
                    name: 'Name18',
                    price: '30'
                },
                {
                    name: 'Name2',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }
                    ,
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                },
                {
                    name: 'Name19',
                    price: '30'
                },
                {
                    name: 'Name20',
                    price: '60'
                }]
            }
        ]
    },
    {
        displayName: 'Devotional',
        iconName: 'videocam',
        route: 'devotional',
        children: [
            {
                displayName: 'Incense',
                packsList: [{
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }
                    ,
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                },
                {
                    name: 'Name21',
                    price: '30'
                },
                {
                    name: 'Name22',
                    price: '60'
                }]
            },
            {
                displayName: 'Flowers',
                packsList: [{
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }
                    ,
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                },
                {
                    name: 'Name23',
                    price: '30'
                },
                {
                    name: 'Name24',
                    price: '60'
                }]
            },
            {
                displayName: 'Others',
                packsList: [{
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }
                    ,
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                },
                {
                    name: 'Name25',
                    price: '30'
                },
                {
                    name: 'Name26',
                    price: '60'
                }]
            }
        ]
    },
];

export const organiserItemsConst: any[] = [
    {
        displayName: 'Home Essentials',
        route: 'home-essentials',
        imageUrl: '🧸',
        icon: 'inbox'
    },
    {
        displayName: 'Office Essentials',
        route: 'office-essentials',
        imageUrl: '🧸',
        icon: 'inbox'
    },
    {
        displayName: 'Personal Grooming',
        route: 'personal-grooming',
        imageUrl: '🧸',
        icon: 'inbox'
    },
];


export const appSettingsStateFirebaseBangalore: appSettingsState = {
    uid: '',
    isLoggedIn: false,
    isAnonymous: false,
    isLocationSaved: false,
    isUserDataSaved: false,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const appSettingsStateFirebaseBellary: appSettingsState = {
    uid: '',
    isLoggedIn: false,
    isAnonymous: false,
    isLocationSaved: false,
    isUserDataSaved: false,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const appSettingsStateDefault: appSettingsState = {
    uid: '',
    isLoggedIn: false,
    isAnonymous: false,
    isLocationSaved: false,
    isUserDataSaved: false,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const appSettingsStateNull: appSettingsState = {
    uid: '',
    isLoggedIn: null,
    isAnonymous: null,
    isLocationSaved: null,
    isUserDataSaved: null,
    userData: {
        uid: '',
        email: '',
        settingsId: '',
        displayName: '',
        emailVerified: '',
        photoURL: '',
    }
};

export const adminMenuConst: any[] = [
    {
        displayName: 'Organiser Tasks',
        route: 'organiser-tasks'
    },
    {
        displayName: 'Categories',
        route: 'categories'
    },
    {
        displayName: 'SubCategories',
        route: 'subCategories'
    },
    {
        displayName: 'Main Packs List',
        route: 'main-packs-list'
    },
    {
        displayName: 'Marketing Material',
        route: 'marketing-material'
    },
    {
        displayName: 'Manage Pincode',
        route: 'manage-Pincode'
    },
    {
        displayName: 'Knowledge Base',
        route: 'knowledge-base'
    },
    {
        displayName: 'App Users',
        route: 'app-users'
    },
    {
        displayName: 'App Orders',
        route: 'app-orders'
    },
    {
        displayName: 'Pin Codes',
        route: 'pincodes'
    },
];

export class Pack {
    constructor(public id: number,
        public name: string,
        public title: string,
        public desc: string,
        public propertyType: string,
        public propertyStatus: any,
        public city: string,
        public zipCode: any,
        public neighborhood: any,
        public street: any,
        public location: any,
        public formattedAddress: string,
        public features: any,
        public featured: boolean,
        public oldPrice: any,
        public newPrice: any,
        public discount: any,
        public description: any,
        public priceDollar: any,
        public priceEuro: any,
        public bedrooms: number,
        public bathrooms: number,
        public garages: number,
        public area: any,
        public yearBuilt: number,
        public ratingsCount: number,
        public ratingsValue: number,
        public additionalFeatures: any,
        public gallery: any,
        public plans: any,
        public availibilityCount: any,
        public videos: any,
        public published: string,
        public lastUpdate: string,
        public color: any,
        public size: any,
        public weight: any,
        public categoryId: any,

        public views: number) { }
}

export const packSample: Pack = {
    "id": 1,
    "name": "Piano",
    "oldPrice": null,
    "newPrice": 175,
    "discount": null,
    "ratingsCount": 3,
    "ratingsValue": 280,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue eleifend nulla vel rutrum. Donec tempus metus non erat vehicula, vel hendrerit sem interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    "availibilityCount": 5,
    "color": [
        "#5C6BC0",
        "#66BB6A",
        "#90A4AE"
    ],
    "size": [
        "S",
        "M",
        "L",
        "XL"
    ],
    "weight": 150,
    "categoryId": 100,
    "title": "Pack Name",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
    "propertyType": "Apartment",
    "propertyStatus": [
        "For Sale"
    ],
    "city": "New York",
    "zipCode": "10033",
    "neighborhood": [
        "Astoria",
        "Midtown"
    ],
    "street": [
        "Astoria Street #1",
        "Midtown Street #2"
    ],
    "location": {
        "lat": 40.84915,
        "lng": -73.9351
    },
    "formattedAddress": "Vendor Name",
    "features": [
        "Air Conditioning",
        "Barbeque",
        "Dryer",
        "Microwave",
        "Refrigerator",
        "Fireplace",
        "Swimming Pool",
        "TV Cable",
        "WiFi"
    ],
    "featured": false,
    "priceDollar": {
        "sale": 1300000,
        "rent": null
    },
    "priceEuro": {
        "sale": 1160000,
        "rent": null
    },
    "bedrooms": 2,
    "bathrooms": 2,
    "garages": 1,
    "area": {
        "value": 2380,
        "unit": "ft²"
    },
    "yearBuilt": 2007,
    "additionalFeatures": [
        {
            "name": "Heat",
            "value": "Natural Gas"
        },
        {
            "name": "Roof",
            "value": "Composition/Shingle"
        },
        {
            "name": "Floors",
            "value": "Wall-to-Wall Carpet"
        },
        {
            "name": "Water",
            "value": "District/Public"
        },
        {
            "name": "Cross Streets",
            "value": "Orangethorpe-Gilbert"
        },
        {
            "name": "Windows",
            "value": "Skylights"
        },
        {
            "name": "Flat",
            "value": "5"
        },
        {
            "name": "Childroom",
            "value": "2"
        }
    ],
    "gallery": [
        {
            "small": "assets/images/props/flat-1/1-small.jpg",
            "medium": "assets/images/props/flat-1/1-medium.jpg",
            "big": "assets/images/props/flat-1/1-big.jpg"
        },
        {
            "small": "assets/images/props/flat-1/2-small.jpg",
            "medium": "assets/images/props/flat-1/2-medium.jpg",
            "big": "assets/images/props/flat-1/2-big.jpg"
        },
        {
            "small": "assets/images/props/flat-1/3-small.jpg",
            "medium": "assets/images/props/flat-1/3-medium.jpg",
            "big": "assets/images/props/flat-1/3-big.jpg"
        },
        {
            "small": "assets/images/props/flat-1/4-small.jpg",
            "medium": "assets/images/props/flat-1/4-medium.jpg",
            "big": "assets/images/props/flat-1/4-big.jpg"
        }
    ],
    "plans": [
        {
            "name": "First floor",
            "desc": "Plan description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
            "area": {
                "value": 1180,
                "unit": "ft²"
            },
            "rooms": 3,
            "baths": 1,
            "image": "assets/images/others/plan-1.jpg"
        },
        {
            "name": "Second floor",
            "desc": "Plan description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
            "area": {
                "value": 1200,
                "unit": "ft²"
            },
            "rooms": 5,
            "baths": 2,
            "image": "assets/images/others/plan-2.jpg"
        }
    ],
    "videos": [
        {
            "name": "Video",
            "link": "http://themeseason.com/data/videos/video-1.mp4"
        },
        {
            "name": "Video with 'ngx-embed-video' plugin",
            "link": "https://www.youtube.com/watch?v=-NInBEdSvp8"
        }
    ],
    "published": "2012-08-12 17:17:30",
    "lastUpdate": "2019-05-20 14:20:00",
    "views": 322
};

export const taskPacksSample = [packSample, packSample, packSample, packSample, packSample, packSample, packSample, packSample, packSample, packSample, packSample, packSample];


const toOrganiseTasks: any[] = [
    {
        link: 'https://angular.io/',
        taskDescription: 'Organise your daily Milk, and save time',
        taskName: 'Catchy Milk Task Name',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-angular',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://facebook.com/',
        taskDescription: 'Organise your daily Grocery, and save time',
        taskName: 'Catchy Grocery Task Name',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-facebook',
        taskPacks: taskPacksSample,
        route: 'Organiser'
    },
    {
        link: 'https://google.com/',
        taskDescription: "Organise your daily Home Essentials, and save time",
        taskName: "Catchy Home Task Name Essentials",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-google',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://microsoft.com/',
        taskDescription: "Organise your daily House Keeping, and save time",
        taskName: "Catchy House Task Name Keeping",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-microsoft',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://microsoft.com/',
        taskDescription: "Organise your daily Fruits/Vegetables, and save time",
        taskName: "Catchy Fruits Task Name/Vegetables",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-microsoft',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://angular.io/',
        taskDescription: 'Organise your daily Milk, and save time',
        taskName: 'Catchy Milk Task Name',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-angular',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://facebook.com/',
        taskDescription: 'Organise your daily Grocery, and save time',
        taskName: 'Catchy Grocery Task Name',
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-facebook',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://google.com/',
        taskDescription: "Organise your daily Home Essentials, and save time",
        taskName: "Catchy Home Task Name Essentials",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-google',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://microsoft.com/',
        taskDescription: "Organise your daily House Keeping, and save time",
        taskName: "Catchy House Task Name Keeping",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-microsoft',
        taskPacks: taskPacksSample
    },
    {
        link: 'https://microsoft.com/',
        taskDescription: "Organise your daily Fruits/Vegetables, and save time",
        taskName: "Catchy Fruits Task Name/Vegetables",
        taskVendor: 'taskVendorName',
        taskImage: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        icon: 'icon-angular',
        CSSClass: 'icon-microsoft',
        taskPacks: taskPacksSample
    }
];

export const dataProfiles: any = [
    {
        full: "Software Professional",
        short: "SE",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Doctor",
        short: "DOC",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Lawyer",
        short: "LAW",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Corporate Professional",
        short: "CA",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Self-Employeed",
        short: "SEM",
        toOrganiseTasks: toOrganiseTasks
    },
    {
        full: "Others",
        short: "OTH",
        toOrganiseTasks: toOrganiseTasks
    }
];

// https://stackblitz.com/edit/angular-mat-card-sample?file=src%2Fstyles.scss
