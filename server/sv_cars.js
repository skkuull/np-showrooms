/* FOLLOW THE PATTERN BELOW & ADD THE VEHICLES BY UR SELF */

const THREE_POINT_ZERO_RELEASE_DATE = 1611792000; // UNIX TIMESTAMP we use this to calculate stok available to sell

const _CARS_ = [
    //Job Vehicles
    {
        "hash": -956048545, // GetEntityModel(CreateVehicle(vehicleName, spawnPoint, flase, false))
        "model": "taxi", 
        "active": true,
        "group": "Job Vehicle", // implemented via new job system
        "brand": "vapid",
        "name": "Taxi",
        "import_price": -1, // see setupConfig below
        "retail_price": 3500,
        "pdm": false,
        "fastlame": false,
        "tuner": false,
        "owner_only": false, // should only the showroom owner see this in the showroom app?
        "showroom_image_url": "",
        "hd_image_url": "",
        "initial_stock": -1, // -1 for unlimited
        "days_per_restock": 0, // how many days between restocking -0 = never restock
        "quantity_per_restock": 0, // how many cars now available per restock

    },
    {
        "hash": 1353720154, // GetEntityModel(CreateVehicle(vehicleName, spawnPoint, flase, false))
        "model": "flatbed", 
        "active": true,
        "group": "Job Vehicle", // implemented via new job system
        "brand": "MTL",
        "name": "Flatbed",
        "import_price": -1, // see setupConfig below
        "retail_price": 4000,
        "pdm": false,
        "fastlame": false,
        "tuner": false,
        "owner_only": false, // should only the showroom owner see this in the showroom app?
        "showroom_image_url": "",
        "hd_image_url": "",
        "initial_stock": -1, // -1 for unlimited
        "days_per_restock": 0, // how many days between restocking -0 = never restock
        "quantity_per_restock": 0, // how many cars now available per restock

    },
    {
        "hash": 1162065741, // GetEntityModel(CreateVehicle(vehicleName, spawnPoint, flase, false))
        "model": "rumpo", 
        "active": false,
        "group": "Job Vehicle", // implemented via new job system
        "brand": "Bravado",
        "name": "New Rumpo",
        "import_price": -1, // see setupConfig below
        "retail_price": 4000,
        "pdm": false,
        "fastlame": false,
        "tuner": false,
        "owner_only": false, // should only the showroom owner see this in the showroom app?
        "showroom_image_url": "",
        "hd_image_url": "",
        "initial_stock": -1, // -1 for unlimited
        "days_per_restock": 0, // how many days between restocking -0 = never restock
        "quantity_per_restock": 0, // how many cars now available per restock
    },
    //Police Vehicle
    {
        "hash": GetHashKey("npolmm"), // GetEntityModel(CreateVehicle(vehicleName, spawnPoint, flase, false))
        "model": "npolmm", 
        "active": true,
        "group": "Police Vehicle", // implemented via new job system
        "brand": "police",
        "name": "npolmm",
        "import_price": -1, // see setupConfig below
        "retail_price": 4000,
        "pdm": false,
        "fastlame": false,
        "tuner": false,
        "owner_only": false, // should only the showroom owner see this in the showroom app?
        "showroom_image_url": "",
        "hd_image_url": "",
        "initial_stock": -1, // -1 for unlimited
        "days_per_restock": 0, // how many days between restocking -0 = never restock
        "quantity_per_restock": 0, // how many cars now available per restock

    }
]
