       // - access the model value of both cars
        // - change the prius model from 2019 to 2020
        // - add a new car of your choice
        // - add a property `isAutomatic` for all three cars
        const cars = {
            toyota: {
                name: "prius",
                model: 2019,
                isAutomatic: true,
            },
            nissan: {
                name: "leaf",
                model: 2020,
                isAutomatic: true,
            },
            bmw: {
                name: "i8",
                model: 2020,
                isAutomatic: true,
            },
        };

        cars.toyota.model;
        cars.nissan.model;
        cars.toyota.model = 2020;


 