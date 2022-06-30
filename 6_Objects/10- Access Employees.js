   // - access the first name property of both employees
        // - add an employee object with your name and the position of full-stack developer
        const employees_1 = [
            {
                id: 1,
                name: {
                    first: "John",
                    last: "Doe",
                },
                position: "Designer",
            },
            {
                id: 2,
                name: {
                    first: "Jane",
                    last: "Doe",
                },
                position: "Engineer",
            },
        ];
        employees_1[0];
        employees_1[0].position = "fullstackdeveloper";

        // - access the first name property of both employees
        // - add an employee object with your name and the position of full-stack developer
        const employees_2 = [
            {
                id: 1,
                name: {
                    first: "John",
                    last: "Doe",
                },
                position: "Designer",
            },
            {
                id: 2,
                name: {
                    first: "Jane",
                    last: "Doe",
                },
                position: "Engineer",
            },
            {
                id: 3,
                name: {
                    first: "Alex",
                    last: "Smith",
                },
                position: "Full-stack Developer",
            },
        ];

        employees_2[0].name.first;
        employees_2[1].name.first;

